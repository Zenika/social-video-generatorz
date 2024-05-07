'use client';

import React from 'react';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, interpolate, Sequence, useCurrentFrame} from 'remotion';
import {BackgroundSimple} from '../Components/BackgroundSimple';
import {FadeIn} from '../Components/Animations/Fade/FadeIn';
import {Title} from '../Components/Title';
import {SpeakerProps} from 'src/Types/SpeakerProps';
import {Speaker} from './Speaker/Speaker';
import {Footer} from './Footer';

export interface TeaserEpisodeProps {
	title: string;
	publishDate: string;
	speakers: SpeakerProps[];
}

const {fontFamily} = loadFont();

export const Teaser: React.FC<TeaserEpisodeProps> = ({
	title,
	publishDate,
	speakers
}) => {
	const frame = useCurrentFrame();

	const gradient = interpolate(frame, [110, 140], [0.1, -0.08], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill style={{color: 'white', fontFamily}}>
			<BackgroundSimple url="/Zenikast/fond-clair.png" />

			<Sequence name="Title" from={10}>
				<FadeIn durationInFrames={30}>
					<Title title={title} style={{fontSize: '3.6rem'}} top={80} />
				</FadeIn>
			</Sequence>

			<Sequence name="Speakers" from={15}> 
				{speakers.map((speaker, index) => (
					<Speaker 
						picture={speaker.picture}
						name={speaker.name}
						role={speaker.role}
						location={speaker.location}
						company={speaker.company}
					/>
				))}

			</Sequence>
			
			<Sequence name="publishDate" from={20}>
				<FadeIn durationInFrames={30}>
						<Footer content={publishDate} />
				</FadeIn>
			</Sequence>

		</AbsoluteFill>
	);
};
