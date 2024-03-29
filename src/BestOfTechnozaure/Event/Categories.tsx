import React from 'react';
import {CategoryProps} from '../../Types/CategoryProps';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {IconWithText} from '../../Components/IconWithText';

export const Categories: React.FC<{
	categories: CategoryProps[];
	endIntroDelta?: number;
}> = ({categories, endIntroDelta = 0}) => {
	return (
		<div
			style={{
				position: 'absolute',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				gap: 132,
				padding: '0 70px',
				top: 350,
				height: 662,
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
							width: '40%',
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
									delay={60 + delay + endIntroDelta}
								>
									<FadeOut
										startingFrame={60 + delay + endIntroDelta}
										durationInFrames={15}
									>
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
