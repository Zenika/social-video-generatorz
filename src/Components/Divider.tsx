import React from 'react';
import {AbsoluteFill} from 'remotion';

export const Divider: React.FC<{
	style: React.CSSProperties;
	width?: string | number;
	height?: number;
}> = ({style, width = '50%', height = 3}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				height: 'max-content',
				...style,
			}}
		>
			<span
				style={{
					width,
					height,
					display: 'block',
					background:
						'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
				}}
			/>
		</AbsoluteFill>
	);
};
