import React from 'react';
import {IconWithTextProps} from './Types/IconWithTextProps';
import {Img, staticFile} from 'remotion';

export const IconWithText: React.FC<IconWithTextProps> = ({
	style,
	text,
	iconSize = '150px',
	iconStyle,
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
					width: iconSize,
					height: iconSize,
					borderRadius: '50%',
					...iconStyle,
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
