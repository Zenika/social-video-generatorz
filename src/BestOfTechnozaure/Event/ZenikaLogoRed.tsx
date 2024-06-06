import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const ZenikaLogoRed: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideBottom = spring({
		frame,
		fps,
		from: -150,
		to: 10,
		durationInFrames: 20,
	});

	return (
		<Img
			src={staticFile('logo_z.svg')}
			style={{bottom: slideBottom}}
		/>
	);
};
