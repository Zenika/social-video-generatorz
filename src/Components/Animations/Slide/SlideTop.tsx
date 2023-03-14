import React, {ReactNode} from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SlideTop: React.FC<{
	from: number;
	to: number;
	durationInFrames: number;
	delay?: number;
	children: ReactNode;
}> = ({from, to, durationInFrames, delay = 0, children}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slide = spring({
		frame: frame - delay,
		fps,
		from,
		to,
		durationInFrames,
	});

	return (
		<span
			style={{
				position: 'absolute',
				width: '100%',
				top: slide,
			}}
		>
			{children}
		</span>
	);
};
