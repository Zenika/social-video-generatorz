import React from 'react';
import {Img} from 'remotion';

export const SpeakerPicture: React.FC<{src: string}> = ({src}) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Img
				style={{
					width: 250,
					height: 250,
					boxShadow: `0 0 0 10px white, 0 0 0 20px #EE2238`,
					borderRadius: '50%',
					objectFit: 'cover',
					objectPosition: 'top center',
				}}
				src={src}
			/>
		</div>
	);
};
