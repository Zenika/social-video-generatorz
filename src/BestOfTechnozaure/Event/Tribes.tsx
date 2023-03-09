import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from '../../Components/Title';
import {Categories} from './Categories';
import React from 'react';
import {CategoryProps} from '../../Types';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';

const {fontFamily} = loadFont();

export const Tribes: React.FC<{
	categories: CategoryProps[];
}> = ({categories}) => {
	return (
		<AbsoluteFill
			style={{
				color: 'white',
				fontFamily,
			}}
		>
			<Sequence name="Title Categories" from={10}>
				<FadeIn durationInFrames={20}>
					<Title
						title="VENEZ ASSISTER À DES CONFÉRENCES TECH"
						style={{
							fontSize: '2.2rem',
							textTransform: 'uppercase',
						}}
						top={215}
					/>
				</FadeIn>
			</Sequence>
			<Sequence name="Categories" from={30}>
				<Categories categories={categories} />
			</Sequence>
		</AbsoluteFill>
	);
};
