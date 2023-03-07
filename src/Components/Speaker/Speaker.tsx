import React from 'react';
import {SpeakerProps} from '../../Types';
import {SpeakerName} from './SpeakerName';
import {SpeakerPicture} from './SpeakerPicture';
import {AbsoluteFill} from 'remotion';

export const Speaker: React.FC<SpeakerProps> = ({name, picture}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
				top: 350,
				gap: 20,
			}}
		>
			<SpeakerPicture src={picture} />
			<SpeakerName name={name} />
		</AbsoluteFill>
	);
};
