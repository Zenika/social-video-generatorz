import React from 'react';
import {SpeakerProps} from '../../Types';
import {SpeakerInfos} from './SpeakerInfos';
import {SpeakerPicture} from './SpeakerPicture';
import {AbsoluteFill} from 'remotion';
import {FadeIn} from '../Animations/Fade/FadeIn';
import {SlideTop} from '../Animations/Slide/SlideTop';

export const Speaker: React.FC<SpeakerProps> = ({
	name,
	picture,
	location,
	role,
}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				top: 350,
				gap: 20,
			}}
		>
			<SlideTop from={-100} to={0} durationInFrames={20}>
				<FadeIn durationInFrames={20}>
					<SpeakerPicture src={picture} />
				</FadeIn>
			</SlideTop>
			<SlideTop from={230} to={330} durationInFrames={20}>
				<FadeIn durationInFrames={20}>
					<SpeakerInfos name={name} location={location} role={role} />
				</FadeIn>
			</SlideTop>
		</AbsoluteFill>
	);
};
