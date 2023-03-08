import React from 'react';
import {
	AbsoluteFill,
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Logo: React.FC<{src: string; width: number; top: number}> = ({
	src,
	width,
	top,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideTop = spring({
		frame,
		from: -200,
		to: top,
		fps,
		durationInFrames: 20,
	});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				top: slideTop,
			}}
		>
			<Img src={staticFile(src)} width={width} />
		</AbsoluteFill>
	);
};
