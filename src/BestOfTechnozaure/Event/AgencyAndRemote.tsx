import React from 'react';
import {Sequence} from 'remotion';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {Location} from './Location';

export const AgencyAndRemote: React.FC<{city: string}> = ({city}) => {
	return (
		<>
			<Sequence name="Dans les locaux" from={5}>
				<SlideTop from={200} to={525} durationInFrames={30}>
					<FadeIn durationInFrames={30}>
						<FadeOut startingFrame={50} durationInFrames={20}>
							<Location
								iconUrl="/mono_zenika.svg"
								text="Dans les locaux Zenika"
								location={city}
							/>
						</FadeOut>
					</FadeIn>
				</SlideTop>
			</Sequence>
			<Sequence name="Ou en ligne">
				<FadeIn startingFrame={70} durationInFrames={15}>
					<FadeOut startingFrame={100} durationInFrames={20}>
						<Location
							iconUrl="/BestOfTz/workadventure.png"
							text="Ou en ligne sur"
							location="workadventure"
							style={{
								top: 525,
							}}
						/>
					</FadeOut>
				</FadeIn>
			</Sequence>
		</>
	);
};
