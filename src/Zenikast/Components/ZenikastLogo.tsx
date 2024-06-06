import React from 'react';
import {
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
    AbsoluteFill
} from 'remotion';

import { ZenikaLogoRed } from '../../BestOfTechnozaure/Event/ZenikaLogoRed'; 
import { SlideTop } from '../../Components/Animations/Slide/SlideTop';
import { FadeIn } from '../../Components/Animations/Fade/FadeIn';

export const ZenikastLogo: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideBottom = spring({
		frame,
		fps,
		from: -150,
		to: 10,
		durationInFrames: 20,
	});

	return (
		<AbsoluteFill>
            <SlideTop from={-100} to={1000} durationInFrames={10}>
				<FadeIn durationInFrames={15}>
					<p>🎙️ Zenikast by <ZenikaLogoRed/></p>
				</FadeIn>
			</SlideTop>
        </AbsoluteFill>
	);
};
