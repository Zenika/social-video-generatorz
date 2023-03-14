import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';

import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from '../../Components/Background';
import {Speaker} from '../../Components/Speaker/Speaker';
import {Title} from '../../Components/Title';
import {Logo} from '../../Components/Logo';
import {LogoDate} from './LogoDate';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {SpeakerProps} from '../../Types/SpeakerProps';
import {Footer} from '../../Components/Footer';

const {fontFamily} = loadFont();

export interface BotzTalkProps {
	title: string;
	date: string;
	speaker: SpeakerProps;
}

export const BotzTalk: React.FC<BotzTalkProps> = ({title, date, speaker}) => {
	return (
		<AbsoluteFill style={{color: 'white', fontFamily}}>
			<Background url="/BestOfTz/background_carre.png" />
			<Footer content="www.zenika.com" />
			<Sequence name="Logo">
				<Logo src="/BestOfTz/BOTZ_LOGO.png" width={650} top={80} />
			</Sequence>
			<Sequence name="Speaker" from={15}>
				<Speaker
					picture={speaker.picture}
					name={speaker.name}
					role={speaker.role}
					location={speaker.location}
					style={{
						top: 300,
					}}
				/>
			</Sequence>
			<Sequence name="Title" from={40}>
				<FadeIn durationInFrames={30}>
					<Title title={title} style={{fontSize: '3.6rem'}} top={800} />
				</FadeIn>
			</Sequence>
			<Sequence name="Detail" from={60}>
				<LogoDate date={date} />
			</Sequence>
		</AbsoluteFill>
	);
};
