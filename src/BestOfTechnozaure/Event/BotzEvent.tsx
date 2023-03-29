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
import {IntroRemoteOnly} from './IntroRemoteOnly';

export interface BotzEventProps {
	title: string;
	remoteOnly: boolean;
	date: string;
	time: string;
	city: string;
	contact: SpeakerProps;
	categories: CategoryProps[];
}

const {fontFamily} = loadFont();

export const BotzEvent: React.FC<BotzEventProps> = ({
	title,
	remoteOnly,
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

	const endIntroDelta = remoteOnly ? 15 : 0;

	return (
		<AbsoluteFill style={{color: 'white', fontFamily}}>
			<Background
				url="/BestOfTz/background_carre.png"
				gradientAngle={gradient}
			/>
			<Sequence name="Intro">
				{remoteOnly ? (
					<IntroRemoteOnly title={title} date={date} time={time} />
				) : (
					<Intro title={title} city={city} date={date} time={time} />
				)}
			</Sequence>
			<Sequence
				name="Categories"
				from={130 - endIntroDelta * 2}
				durationInFrames={100 + endIntroDelta}
			>
				<Tribes categories={categories} endIntroDelta={endIntroDelta} />
			</Sequence>
			<Sequence
				name="Contact"
				from={230 - endIntroDelta}
				durationInFrames={70 + endIntroDelta}
			>
				<Contact contact={contact} />
			</Sequence>
		</AbsoluteFill>
	);
};
