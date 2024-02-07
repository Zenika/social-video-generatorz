import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{
	title: string;
	style?: React.CSSProperties;
	top: number;
}> = ({title, style, top}) => {
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
				textAlign: 'center',
				padding: '0 50px',
				height: 'max-content',
				transformOrigin: 'center',
				fontWeight: 700,
				top: slideTop,
				...style,
			}}
		>
			{title}
		</AbsoluteFill>
	);
};
