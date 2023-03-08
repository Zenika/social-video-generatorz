import React from 'react';
import {CategoryProps} from '../../Types';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {Background} from '../../Components/Background';
import {Intro} from './Intro';

export interface BotzEventProps {
	title: string;
	date?: string;
	time?: string;
	location?: string;
	categories: CategoryProps[];
}

const {fontFamily} = loadFont();

export const BotzEvent: React.FC<BotzEventProps> = ({
	title,
	date,
	time,
	location,
	categories,
}) => {
	const frame = useCurrentFrame();

	const gradient = interpolate(frame, [80, 120], [0.1, -0.08], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill style={{color: 'white', fontFamily}}>
			<Background url="/BestOfTz/background.png" gradientAngle={gradient} />
			<Intro title={title} categories={categories} />
		</AbsoluteFill>
	);
};
