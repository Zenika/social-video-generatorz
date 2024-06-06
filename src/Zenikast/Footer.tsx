import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';

import { ZenikastLogo } from './Components/ZenikastLogo';
import { SlideTop } from '../Components/Animations/Slide/SlideTop';
import { FadeIn } from '../Components/Animations/Fade/FadeIn';

export const Footer: React.FC<{content: string}> = ({content}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const slideBottom = spring({
		frame,
		fps,
		from: -150,
		to: 500,
		durationInFrames: 20,
	});

	return (
		<AbsoluteFill
			style={{
				fontSize: '2rem',
				bottom: slideBottom,
				position: 'absolute',
				top: '0',
				width: '100%',
				textAlign: 'center'
			}}
		>
			<ZenikastLogo/>	
		
			<SlideTop from={230} to={1080} durationInFrames={20}>
				<FadeIn durationInFrames={20}>
				<p>
					Episode disponible le {content}
				</p>
				</FadeIn>
			</SlideTop>
			
		</AbsoluteFill>
	);
};
