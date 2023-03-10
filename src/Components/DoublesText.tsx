import React from 'react';
import {AbsoluteFill} from 'remotion';

export const DoublesText: React.FC<{
	firstText?: string;
	secondText?: string;
}> = ({firstText, secondText}) => {
	return (
		<AbsoluteFill
			style={{
				height: 'max-content',
				alignItems: 'center',
				fontSize: '2.8rem',
				textShadow: '0 0 15px rgba(0,0,0,0.6)',
				gap: 10,
			}}
		>
			<span
				style={{
					fontWeight: 700,
				}}
			>
				{firstText}
			</span>
			<span>{secondText}</span>
		</AbsoluteFill>
	);
};
