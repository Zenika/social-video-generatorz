import React from 'react';
import {Sequence} from 'remotion';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {Location} from './Location';

export const RemoteOnly: React.FC = () => {
	return (
		<Sequence name="En ligne">
			<FadeIn startingFrame={10} durationInFrames={15}>
				<FadeOut startingFrame={80} durationInFrames={20}>
					<Location
						iconUrl="/BestOfTz/workadventure.png"
						text="En ligne sur"
						location="workadventure"
						style={{
							top: 525,
						}}
					/>
				</FadeOut>
			</FadeIn>
		</Sequence>
	);
};
