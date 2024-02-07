import React from 'react';
import {SpeakerInfos} from './SpeakerInfos';
import {SpeakerPicture} from './SpeakerPicture';
import {AbsoluteFill} from 'remotion';
import {FadeIn} from '../Animations/Fade/FadeIn';
import {SlideTop} from '../Animations/Slide/SlideTop';

export const Speaker: React.FC<{
	names: string[];
	pictures: string[];
	location?: string;
	role?: string;
	style?: React.CSSProperties;
}> = ({names, pictures, location, role, style}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				gap: 20,
				...style,
			}}
		>
				<FadeIn durationInFrames={20} style={{width: '100%', marginTop: "21px"}}>
					<div style={{display: 'flex', width: '100%', justifyContent: 'center', gap: '300px'}}>
						{pictures.map(picture => <SpeakerPicture key={picture} src={picture} />)}
					</div>
				</FadeIn>
				<FadeIn durationInFrames={20} style={{width: '100%', marginTop: "21px"}}>
					<div style={{display: 'grid', gridTemplateColumns: `repeat(${names.length}, 1fr)`, maxWidth: '60%', margin: 'auto'}}>
						{names.map(name => <SpeakerInfos key={name} name={name} location={location} role={role} />)}
					</div>
				</FadeIn>
		</AbsoluteFill>
	);
};
