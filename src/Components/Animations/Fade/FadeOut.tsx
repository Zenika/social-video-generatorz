import React, {ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeOut: React.FC<{
	startAt: number;
	durationInFrames: number;
	children: ReactNode;
}> = ({startAt, durationInFrames, children}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(
		frame,
		[startAt, startAt + durationInFrames],
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
			}}
		>
			{children}
		</div>
	);
};
