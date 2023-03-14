import React, {ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeIn: React.FC<{
	startingFrame?: number;
	durationInFrames: number;
	style?: React.CSSProperties;
	children: ReactNode;
}> = ({startingFrame = 0, durationInFrames, style, children}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(
		frame,
		[startingFrame, startingFrame + durationInFrames],
		[0, 1],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	return (
		<span
			style={{
				opacity,
				...style,
			}}
		>
			{children}
		</span>
	);
};
