import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{
	title: string;
	style: React.CSSProperties;
	top: number;
}> = ({title, style, top}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	return (
		<AbsoluteFill
			style={{
				textAlign: 'center',
				padding: '0 50px',
				height: 'max-content',
				transformOrigin: 'center',
				fontWeight: 600,
				opacity,
				top,
				...style,
			}}
		>
			{title}
		</AbsoluteFill>
	);
};
