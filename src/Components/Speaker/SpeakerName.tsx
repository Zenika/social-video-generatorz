import React from 'react';

export const SpeakerName: React.FC<{name: string}> = ({name}) => {
	return (
		<p
			style={{
				fontSize: '2.8rem',
				fontWeight: '500',
				textShadow: '0 0 15px rgba(0,0,0,0.6)',
			}}
		>
			{name}
		</p>
	);
};
