import React from 'react';
import {Lottie} from '@remotion/lottie';
import {useLottie} from './hooks/useLottie';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Details: React.FC<{
	date?: string;
	time?: string;
	location?: string;
	iconScaleFactor?: number;
	style?: React.CSSProperties;
}> = ({date, time, location, iconScaleFactor = 1, style}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const illustrationDate = useLottie('lf20_ak90tqhe');
	const illustrationHour = useLottie('lf20_nv5aXa');
	const illustrationLocation = useLottie('lf20_PgZU3O');

	const durationInFrames = 30;
	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	if (!illustrationHour || !illustrationDate || !illustrationLocation) {
		return null;
	}

	return (
		<div
			style={{
				color: 'white',
				position: 'absolute',
				display: 'flex',
				width: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '7rem',
				...style,
			}}
		>
			{date && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Lottie
						style={{
							width: '110px',
							filter: 'none',
							paddingTop: 10,
							transform: `scale(${iconScaleFactor})`,
						}}
						playbackRate={1.5}
						animationData={illustrationDate}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{date}
					</span>
				</div>
			)}
			{location && (
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '1rem',
					}}
				>
					<Lottie
						style={{
							width: '70px',
							filter: 'none',
							paddingTop: 10,
							transform: `scale(${iconScaleFactor})`,
						}}
						animationData={illustrationLocation}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{location}
					</span>
				</div>
			)}
			{time && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '2rem',
					}}
				>
					<Lottie
						style={{
							width: '50px',
							filter: 'none',
							paddingTop: 10,
							transform: `scale(${iconScaleFactor})`,
						}}
						animationData={illustrationHour}
					/>
					<span
						style={{
							position: 'relative',
							bottom: drop,
							opacity,
						}}
					>
						{time}
					</span>
				</div>
			)}
		</div>
	);
};
