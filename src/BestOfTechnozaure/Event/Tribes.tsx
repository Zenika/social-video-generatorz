import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from '../../Components/Title';
import {Categories} from './Categories';
import React from 'react';
import {CategoryProps} from '../../Types';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';

const {fontFamily} = loadFont();

export const Tribes: React.FC<{
	categories: CategoryProps[];
}> = ({categories}) => {
	return (
		<AbsoluteFill>
			<Sequence name="Title Categories">
				<FadeIn durationInFrames={20}>
					<FadeOut startAt={70} durationInFrames={15}>
						<Title
							title="VENEZ ASSISTER À DES CONFÉRENCES TECH"
							style={{
								fontSize: '2.2rem',
								textTransform: 'uppercase',
							}}
							top={215}
						/>
					</FadeOut>
				</FadeIn>
			</Sequence>
			<Sequence name="Categories" from={10}>
				<Categories categories={categories} />
			</Sequence>
		</AbsoluteFill>
	);
};
