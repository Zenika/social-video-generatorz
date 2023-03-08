import React from 'react';
import {CategoryProps} from '../Types';
import {
	AbsoluteFill,
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Category: React.FC<CategoryProps> = ({
	style,
	name,
	size = '150px',
	icon,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const slideLeft = spring({frame, fps, from: 770, to: 670});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames: 30});

	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				width: 'max-content',
				height: 'max-content',
				gap: '20px',
				top: 350,
				left: slideLeft,
				opacity,
				...style,
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: size,
					height: size,
					borderRadius: '50%',
					border: '7px solid #BF1D67',
					background: 'white',
					padding: '10px',
					transformOrigin: 'center',
				}}
			>
				<Img
					src={staticFile(icon)}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
			</div>
			<span
				style={{
					textShadow: '0 0 15px rgba(0,0,0,0.6)',
				}}
			>
				{name}
			</span>
		</AbsoluteFill>
	);
};
