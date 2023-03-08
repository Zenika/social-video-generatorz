import React from 'react';
import {CategoryProps} from '../Types';
import {Img, staticFile} from 'remotion';

export const Category: React.FC<CategoryProps> = ({
	style,
	name,
	size = '150px',
	icon,
}) => {
	return (
		<div
			style={{
				position: 'absolute',
				display: 'flex',
				alignItems: 'center',
				width: 'max-content',
				height: 'max-content',
				gap: '20px',
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
					fontWeight: 600,
				}}
			>
				{name}
			</span>
		</div>
	);
};
