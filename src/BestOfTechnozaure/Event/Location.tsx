import React from 'react';
import {AbsoluteFill} from 'remotion';
import {IconText} from '../../Components/IconText';

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
			<IconText
				text={`${text} @${location}`}
				icon={iconUrl}
				style={{
					flexDirection: 'column',
					fontSize: '2.6rem',
				}}
				size={210}
			/>
		</AbsoluteFill>
	);
};
