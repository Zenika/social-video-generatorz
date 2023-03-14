import React from 'react';
import {AbsoluteFill} from 'remotion';

export const Title: React.FC<{
	title: string;
	style?: React.CSSProperties;
	top: number;
}> = ({title, style, top}) => {
	return (
		<AbsoluteFill
			style={{
				textAlign: 'center',
				padding: '0 50px',
				height: 'max-content',
				transformOrigin: 'center',
				fontWeight: 700,
				top,
				...style,
			}}
		>
			{title}
		</AbsoluteFill>
	);
};
