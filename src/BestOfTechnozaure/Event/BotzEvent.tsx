'use client';

import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {Background} from '../../Components/Background';
import {Intro} from './Intro';
import {Tribes} from './Tribes';
import {Contact} from './Contact';
import {SpeakerProps} from '../../Types/SpeakerProps';
import {CategoryProps} from '../../Types/CategoryProps';

export interface BotzEventProps {
	title: string;
	date: string;
	time: string;
	city: string;
	contact: SpeakerProps;
	categories: CategoryProps[];
}

const {fontFamily} = loadFont();

export const BotzEvent: React.FC<BotzEventProps> = ({
	title,
	date,
	time,
	city,
	contact,
	categories,
}) => {
	const frame = useCurrentFrame();

	const gradient = interpolate(frame, [110, 140], [0.1, -0.08], {
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
				<Intro title={title} city={city} date={date} time={time} />
			</Sequence>
			<Sequence name="Categories" from={130} durationInFrames={100}>
				<Tribes categories={categories} />
			</Sequence>
			<Sequence name="Contact" from={230} durationInFrames={70}>
				<Contact contact={contact} />
			</Sequence>
		</AbsoluteFill>
	);
};
