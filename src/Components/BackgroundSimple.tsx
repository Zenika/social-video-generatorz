import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const BackgroundSimple: React.FC<{url: string}> = ({
	url
}) => {
	return (
		<AbsoluteFill>
			<Img src={staticFile(url)} />
			<span
				style={{
					display: 'block',
					position: 'absolute',
					width: '100%',
					height: '100%',
					top: 0
				}}
			/>
		</AbsoluteFill>
	);
};
