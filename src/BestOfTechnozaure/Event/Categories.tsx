import React from 'react';
import {CategoryProps} from '../../Types';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Category} from '../../Components/Category';

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
				height: '30%',
				display: 'grid',
				gridTemplateColumns: `repeat(${categories.length}, 1fr)`,
				padding: '0 70px',
				bottom: 80,
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
						}}
					>
						<Category
							name={category.name}
							icon={category.icon}
							style={{
								flexDirection: 'column',
								fontSize: '1.8rem',
								top: slideTop,
								opacity,
							}}
							size={130}
						/>
					</div>
				);
			})}
		</div>
	);
};
