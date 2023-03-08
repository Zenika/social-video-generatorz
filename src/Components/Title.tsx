import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{title: string; style: React.CSSProperties}> = ({
	title,
	style,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const scale = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<AbsoluteFill
			style={{
				textAlign: 'center',
				padding: '0 50px',
				top: 800,
				height: 'max-content',
				transform: `scale(${scale})`,
				transformOrigin: 'center',
				...style,
			}}
		>
			{title}
		</AbsoluteFill>
	);
};
