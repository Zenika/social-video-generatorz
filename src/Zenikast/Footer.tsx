import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Footer: React.FC<{content: string}> = ({content}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideBottom = spring({
		frame,
		fps,
		from: -150,
		to: 50,
		durationInFrames: 20,
	});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				fontSize: '2rem',
			}}
		>
			<span
				style={{
					position: 'absolute',
					bottom: slideBottom,
				}}
			>
				Episode disponible le {content}
			</span>
		</AbsoluteFill>
	);
};
