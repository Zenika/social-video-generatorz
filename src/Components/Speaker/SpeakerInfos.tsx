import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const SpeakerInfos: React.FC<{
	name: string;
	role?: string;
	location?: string;
}> = ({name, role, location}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const delay = 5;
	const slideTop = spring({
		frame: frame - delay,
		fps,
		from: -50,
		to: 0,
		durationInFrames,
	});
	const opacity = spring({
		frame: frame - delay,
		fps,
		from: 0,
		to: 1,
		durationInFrames,
	});

	return (
		<div
			style={{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 10,
			}}
		>
			<span
				style={{
					fontSize: '2.8rem',
					fontWeight: '700',
					textShadow: '0 0 15px rgba(0,0,0,0.6)',
					position: 'relative',
				}}
			>
				{name}
			</span>
			<div>
				{role && (
					<span
						style={{
							fontSize: '2.8rem',
							fontWeight: '500',
							textShadow: '0 0 15px rgba(0,0,0,0.6)',
							position: 'relative',
						}}
					>
						{role}
					</span>
				)}
				{location && (
					<span
						style={{
							fontSize: '2.8rem',
							fontWeight: '500',
							textShadow: '0 0 15px rgba(0,0,0,0.6)',
							position: 'relative',
						}}
					>
						&nbsp;@{location}
					</span>
				)}
			</div>
		</div>
	);
};
