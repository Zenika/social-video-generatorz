import React from 'react';
import {Img, staticFile} from 'remotion';

export const Background: React.FC<{url: string; gradientAngle?: number}> = ({
	url,
	gradientAngle = 0.85,
}) => {
	return (
		<div style={{position: 'relative'}}>
			<Img src={staticFile(url)} />
			<span
				style={{
					display: 'block',
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0,
					background: `linear-gradient(${gradientAngle}turn, rgba(238, 34, 56,0.5) 10%, rgba(238,34,56,0) 50%`,
				}}
			/>
		</div>
	);
};
