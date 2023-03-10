import React from 'react';
import {CategoryProps} from '../../Types';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Category} from '../../Components/Category';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';

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
				const delay = id * 5;

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
							delay={delay}
						>
							<FadeIn startAt={delay} durationInFrames={durationInFrames}>
								<SlideTop
									from={0}
									to={-90}
									durationInFrames={durationInFrames}
									delay={80 + delay}
								>
									<FadeOut startAt={80 + delay} durationInFrames={15}>
										<Category
											name={category.name}
											icon={category.icon}
											style={{
												flexDirection: 'column',
												fontSize: '2.6rem',
											}}
											size={200}
										/>
									</FadeOut>
								</SlideTop>
							</FadeIn>
						</SlideTop>
					</div>
				);
			})}
		</div>
	);
};
