import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';

import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Background} from '../../Components/Background';
import {CategoryProps, SpeakerProps} from '../../Types';
import {Speaker} from '../../Components/Speaker/Speaker';
import {Category} from '../../Components/Category';
import {Title} from '../../Components/Title';
import {Logo} from '../../Components/Logo';
import {LogoDate} from './LogoDate';

const {fontFamily} = loadFont();

export interface BotzTalkProps {
	title: string;
	date: string;
	speaker: SpeakerProps;
	category: CategoryProps;
}

export const BotzTalk: React.FC<BotzTalkProps> = ({
	title,
	date,
	speaker,
	category,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const delay = 10;
	const slideLeft = spring({
		frame: frame - delay,
		fps,
		from: 770,
		to: 670,
		durationInFrames,
	});
	const opacity = spring({
		frame: frame - 10,
		from: 0,
		to: 1,
		fps,
		durationInFrames,
	});

	return (
		<AbsoluteFill style={{color: 'white', fontFamily}}>
			<Background url="/BestOfTz/background_carre.png" />
			<Sequence name="Logo">
				<Logo src="/BestOfTz/BOTZ_LOGO.png" width={650} top={80} />
			</Sequence>
			<Sequence name="Speaker" from={15}>
				<Speaker picture={speaker.picture} name={speaker.name} />
			</Sequence>
			<Sequence name="Category" from={delay}>
				<Category
					name={category.name}
					icon={category.icon}
					style={{
						flexDirection: 'row',
						fontSize: '1.6rem',
						top: 350,
						left: slideLeft,
						opacity,
					}}
					size={100}
				/>
			</Sequence>
			<Sequence name="Title" from={60}>
				<Title title={title} style={{fontSize: '3.6rem'}} top={800} />
			</Sequence>
			<Sequence name="Detail" from={90}>
				<LogoDate date={date} />
			</Sequence>
		</AbsoluteFill>
	);
};
