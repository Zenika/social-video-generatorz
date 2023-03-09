import React, {ReactNode} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const FadeIn: React.FC<{
	startAt?: number;
	durationInFrames: number;
	children: ReactNode;
}> = ({startAt = 0, durationInFrames, children}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(
		frame,
		[startAt, startAt + durationInFrames],
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
			}}
		>
			{children}
		</span>
	);
};
