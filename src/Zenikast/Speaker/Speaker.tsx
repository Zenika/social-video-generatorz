import React from 'react';
import {SpeakerInfos} from './SpeakerInfos';
import {SpeakerPicture} from './SpeakerPicture';
import {AbsoluteFill} from 'remotion';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';

export const Speaker: React.FC<{
	name: string;
	picture: string;
	location?: string;
	role?: string;
	company?: string;
	style?: React.CSSProperties;
}> = ({name, picture, location, role, style, company}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				gap: 20,
				...style,
			}}
		>
			
			<SlideTop from={-100} to={500} durationInFrames={20}>
				<FadeIn durationInFrames={20}>
					<SpeakerPicture src={picture} />
				</FadeIn>
			</SlideTop>

			<SlideTop from={230} to={730} durationInFrames={20}>
				<FadeIn durationInFrames={20}>
					<SpeakerInfos name={name} location={location} role={role} company={company} />
				</FadeIn>
			</SlideTop>
			

		</AbsoluteFill>
	);
};
