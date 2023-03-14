import React, {ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeOut: React.FC<{
	startingFrame: number;
	durationInFrames: number;
	style?: React.CSSProperties;
	children: ReactNode;
}> = ({startingFrame, durationInFrames, style, children}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(
		frame,
		[startingFrame, startingFrame + durationInFrames],
		[1, 0],
		{
			extrapolateRight: 'clamp',
			extrapolateLeft: 'clamp',
		}
	);

	return (
		<div
			style={{
				opacity,
				...style,
			}}
		>
			{children}
		</div>
	);
};
