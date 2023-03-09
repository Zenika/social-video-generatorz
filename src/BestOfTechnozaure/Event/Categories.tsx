import React from 'react';
import {CategoryProps} from '../../Types';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Category} from '../../Components/Category';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';

export const Categories: React.FC<{categories: CategoryProps[]}> = ({
	categories,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<div
			style={{
				position: 'absolute',
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${categories.length / 2}, 1fr)`,
				rowGap: 132,
				padding: '0 70px',
				top: 350,
			}}
		>
			{categories.map((category, id) => {
				const durationInFrames = 30;
				const delayFact = 5;

				const slideTop = spring({
					frame: frame - id * delayFact,
					fps,
					from: -90,
					to: 0,
					durationInFrames,
				});

				const opacity = spring({
					frame: frame - id * delayFact,
					from: 0,
					to: 1,
					fps,
					durationInFrames,
				});

				return (
					<div
						style={{
							position: 'relative',
							display: 'flex',
							justifyContent: 'center',
							height: 275,
						}}
					>
						<SlideTop
							from={-90}
							to={0}
							durationInFrames={durationInFrames}
							delay={id * delayFact}
						>
							<FadeIn
								startAt={id * delayFact}
								durationInFrames={durationInFrames}
							>
								<Category
									name={category.name}
									icon={category.icon}
									style={{
										flexDirection: 'column',
										fontSize: '2.6rem',
									}}
									size={200}
								/>
							</FadeIn>
						</SlideTop>
					</div>
				);
			})}
		</div>
	);
};
