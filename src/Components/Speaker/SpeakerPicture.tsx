import React from 'react';
import {Img} from 'remotion';

export const SpeakerPicture: React.FC<{src: string}> = ({src}) => {
	return (
		<Img
			style={{
				width: 250,
				height: 250,
				boxShadow: `0 0 0 10px white, 0 0 0 20px #EE2238`,
				borderRadius: '50%',
			}}
			src={src}
		/>
	);
};
