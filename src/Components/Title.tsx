import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{title: string; style: React.CSSProperties}> = ({
	title,
	style,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const slideTop = spring({frame, fps, from: 780, to: 800, durationInFrames});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	return (
		<AbsoluteFill
			style={{
				textAlign: 'center',
				padding: '0 50px',
				top: slideTop,
				height: 'max-content',
				transformOrigin: 'center',
				opacity,
				...style,
			}}
		>
			{title}
		</AbsoluteFill>
	);
};
