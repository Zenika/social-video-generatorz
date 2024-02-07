'use client';

import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';

import {
	AbsoluteFill,
	Sequence,
	staticFile,
	Audio,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring
} from 'remotion';
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
			<Audio
				volume={(f) =>
					interpolate(f, [0, 300, 370], [1, 1, 0], { extrapolateLeft: "clamp" })
				}
				src={staticFile("/sounds/intro.mp3")} />
			<Background url="/BestOfTz/background.png" />
			<Footer content="www.zenika.com" />
			<Sequence name="Logo" from={130}>
				<Logo src="/technozaure.svg" width={650} top={80} />
			</Sequence>
			<Sequence name="Speaker" from={50}>
				<Speaker
					pictures={speaker.pictures}
					names={speaker.names}
					role={speaker.role}
					location={speaker.location}
					style={{
						top: 240,
					}}
				/>
			</Sequence>
			<Sequence name="Title" from={20}>
				<Title title={title} style={{fontSize: '3.6rem'}} top={650} />
			</Sequence>
			<Sequence name="Detail" from={250}>
				<FadeIn durationInFrames={15}>
					<hr
						style={{
							position: 'absolute',
							width: '5px',
							height: '80px',
							border: 'none',
							background: 'white',
							left: '50%',
							bottom: 70,
							transform: 'translateX(-50%)',
						}}
					/>
				</FadeIn>
				<LogoDate date={date} />
			</Sequence>
		</AbsoluteFill>
	);
};
