/**
 * This is an example of a server that returns dynamic video.
 * Run `pnpm serve` to try it out!
 * If you don't want to render videos on a server, you can safely
 * delete this file.
 */

import {bundle} from '@remotion/bundler';
import {
	getCompositions,
	renderFrames,
	stitchFramesToVideo,
} from '@remotion/renderer';
import express from 'express';
import fs from 'fs';
import os from 'os';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
	cors({
		origin: 'https://social-video-generatorz.cleverapps.io',
		optionsSuccessStatus: 200,
		methods: 'POST',
	})
);

app.post('/:compositionId/', async (req, res) => {
	const sendFile = (file) => {
		fs.createReadStream(file)
			.pipe(res)
			.on('close', () => {
				res.end();
			});
	};
	try {
		const reqParams = req.params.compositionId;
		const compositionId = reqParams.match(/([^&]+)/i)[0];
		const bundled = await bundle('src/index.ts');
		const comps = await getCompositions(bundled, {inputProps: req.body});
		const video = comps.find((c) => c.id === compositionId);
		if (!video) {
			throw new Error(`No video called ${compositionId}`);
		}
		res.set('content-type', 'video/mp4');

		const tmpDir = await fs.promises.mkdtemp(
			path.join(os.tmpdir(), 'remotion-')
		);
		const {assetsInfo} = await renderFrames({
			config: video,
			webpackBundle: bundled,
			onStart: () => console.log(req.body, 'Rendering frames...'),
			onFrameUpdate: (f) => {
				if (f % 10 === 0) {
					console.log(req.body, `Rendered frame ${f}`);
				}
			},
			parallelism: null,
			outputDir: tmpDir,
			inputProps: req.body,
			compositionId,
			imageFormat: 'jpeg',
		});

		const finalOutput = path.join(tmpDir, 'out.mp4');
		await stitchFramesToVideo({
			dir: tmpDir,
			force: true,
			fps: video.fps,
			height: video.height,
			width: video.width,
			outputLocation: finalOutput,
			imageFormat: 'jpeg',
			assetsInfo,
		});
		sendFile(finalOutput);
		console.log(req.body, 'Video rendered and sent!');
	} catch (err) {
		console.error(err);
		res.json({
			error: err,
		});
	}
});

app.listen(port);

console.log(
	[
		`The server has started on http://localhost:${port}!`,
		'You can render a video by passing props as URL parameters.',
		'',
		'To generate a video, try this:',
		'',
		`http://localhost:${port}/CompositionId&firstProps=myprops&secondprops...`,
		'',
	].join('\n')
);
