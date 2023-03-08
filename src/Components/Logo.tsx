import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';

export const Logo: React.FC<{src: string}> = ({src}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				top: 80,
			}}
		>
			<Img src={staticFile(src)} width={650} />
		</AbsoluteFill>
	);
};
