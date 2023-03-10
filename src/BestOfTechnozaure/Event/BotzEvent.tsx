import React from 'react';
import {CategoryProps} from '../../Types';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {Background} from '../../Components/Background';
import {Intro} from './Intro';
import {Tribes} from './Tribes';

export interface BotzEventProps {
	title: string;
	date: string;
	time: string;
	city: string;
	onlinePlatform: string;
	categories: CategoryProps[];
}

const {fontFamily} = loadFont();

export const BotzEvent: React.FC<BotzEventProps> = ({
	title,
	date,
	time,
	city,
	onlinePlatform,
	categories,
}) => {
	const frame = useCurrentFrame();

	const gradient = interpolate(frame, [120, 150], [0.1, -0.08], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill style={{color: 'white', fontFamily}}>
			<Background
				url="/BestOfTz/background_carre.png"
				gradientAngle={gradient}
			/>
			<Sequence name="Intro">
				<Intro
					title={title}
					city={city}
					date={date}
					time={time}
					onlinePlatform={onlinePlatform}
				/>
			</Sequence>
			<Sequence name="Categories" from={140} durationInFrames={120}>
				<Tribes categories={categories} />
			</Sequence>
		</AbsoluteFill>
	);
};
