import React from 'react';
import {CategoryProps} from '../../Types/CategoryProps';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {IconWithText} from '../../Components/IconWithText';

export const Categories: React.FC<{categories: CategoryProps[]}> = ({
	categories,
}) => {
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
						key={id}
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
							<FadeIn startingFrame={delay} durationInFrames={durationInFrames}>
								<SlideTop
									from={0}
									to={90}
									durationInFrames={durationInFrames}
									delay={60 + delay}
								>
									<FadeOut startingFrame={60 + delay} durationInFrames={15}>
										<IconWithText
											text={category.name}
											icon={category.icon}
											style={{
												flexDirection: 'column',
												fontSize: '2.6rem',
												gap: 20,
											}}
											iconSize={200}
											iconStyle={{
												border: '7px solid #BF1D67',
												background: 'white',
												padding: '10px',
											}}
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
