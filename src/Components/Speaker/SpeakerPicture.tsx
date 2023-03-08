import React from 'react';
import {Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SpeakerPicture: React.FC<{src: string}> = ({src}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideTop = spring({
		frame,
		from: -100,
		to: 0,
		fps,
		durationInFrames: 30,
	});

	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<div
			style={{
				position: 'relative',
				top: slideTop,
				opacity,
			}}
		>
			<Img
				style={{
					width: 250,
					height: 250,
					boxShadow: `0 0 0 10px white, 0 0 0 20px #EE2238`,
					borderRadius: '50%',
				}}
				src={src}
			/>
		</div>
	);
};
