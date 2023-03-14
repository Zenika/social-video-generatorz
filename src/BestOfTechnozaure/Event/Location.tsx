import React from 'react';
import {AbsoluteFill} from 'remotion';
import {IconWithText} from '../../Components/IconWithText';

export const Location: React.FC<{
	text: string;
	location: string;
	iconUrl: string;
	style?: React.CSSProperties;
}> = ({text, location, style, iconUrl}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				...style,
			}}
		>
			<IconWithText
				text={`${text} @${location}`}
				icon={iconUrl}
				style={{
					flexDirection: 'column',
					fontSize: '2.6rem',
					gap: 100,
				}}
				iconSize={210}
			/>
		</AbsoluteFill>
	);
};
