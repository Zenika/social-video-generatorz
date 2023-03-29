import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from '../../Components/Title';
import {Categories} from './Categories';
import React from 'react';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {CategoryProps} from '../../Types/CategoryProps';

export const Tribes: React.FC<{
	categories: CategoryProps[];
	endIntroDelta?: number;
}> = ({categories, endIntroDelta = 0}) => {
	return (
		<AbsoluteFill>
			<Sequence name="Title Categories">
				<FadeIn durationInFrames={20}>
					<FadeOut startingFrame={70 + endIntroDelta} durationInFrames={15}>
						<Title
							title="Venez assister à des conférences tech"
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
				<Categories categories={categories} endIntroDelta={endIntroDelta} />
			</Sequence>
		</AbsoluteFill>
	);
};
