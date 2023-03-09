import React from 'react';
import {IconTextProps} from '../Types';
import {Img, staticFile} from 'remotion';

export const IconText: React.FC<IconTextProps> = ({
	style,
	text,
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
				gap: '100px',
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
				{text}
			</span>
		</div>
	);
};
