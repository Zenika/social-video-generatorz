import React from 'react';
import {Easing, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

export const SpeakerName: React.FC<{name: string}> = ({name}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideTop = interpolate(frame, [5, 35], [-50, 0], {
		easing: Easing.elastic(2),
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	const opacity = interpolate(frame, [5, 35], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<p
			style={{
				fontSize: '2.8rem',
				fontWeight: '500',
				textShadow: '0 0 15px rgba(0,0,0,0.6)',
				position: 'relative',
				top: slideTop,
				opacity,
			}}
		>
			{name}
		</p>
	);
};
