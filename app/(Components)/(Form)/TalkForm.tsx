import React from 'react';
import {Player} from '@remotion/player';
import {VideoTemplate} from '../../../Types/VideoTemplate';
import {useInputChange} from '../../hooks/onInputChanges';
import {TalkDefaultProps} from '../../../DefaultProps/TalkDefaultProps';
import {Input} from './Input';

export const TalkForm: React.FC<{
	currentTemplate: VideoTemplate;
}> = ({currentTemplate}) => {
	const [title, setTitle] = useInputChange<string>(TalkDefaultProps.title);
	const [date, setDate] = useInputChange<string>(TalkDefaultProps.date);
	const [speakerName, setSpeakerName] = useInputChange<string>(
		TalkDefaultProps.speaker.name
	);
	const [speakerPicture, setSpeakerPicture] = useInputChange<string>(
		TalkDefaultProps.speaker.picture
	);
	const [speakerRole, setSpeakerRole] = useInputChange<string>(
		TalkDefaultProps.speaker.role
	);
	const [speakerLocation, setSpeakerLocation] = useInputChange<string>(
		TalkDefaultProps.speaker.location
	);

	const talkInputs = {
		title: {
			data: title,
			setData: setTitle,
		},
		date: {
			data: date,
			setData: setDate,
		},
		speakerName: {
			data: speakerName,
			setData: setSpeakerName,
		},
		speakerPicture: {
			data: speakerPicture,
			setData: setSpeakerPicture,
		},
		speakerRole: {
			data: speakerRole,
			setData: setSpeakerRole,
		},
		speakerLocation: {
			data: speakerLocation,
			setData: setSpeakerLocation,
		},
	};

	const data = {
		title,
		date,
		speaker: {
			name: speakerName,
			picture: speakerPicture,
			role: speakerRole,
			location: speakerLocation,
		},
	};

	return (
		<>
			<div>
				<Player
					controls
					autoPlay
					loop
					durationInFrames={currentTemplate.durationInFrames}
					fps={30}
					compositionWidth={currentTemplate.width}
					compositionHeight={currentTemplate.height}
					component={currentTemplate.component}
					style={{width: 500, height: 500}}
					inputProps={data}
				/>
			</div>

			<form>
				<section>
					{Object.entries(talkInputs).map(([label, input], key) => (
						<Input
							key={key}
							setValue={input.setData}
							label={label}
							value={input.data}
						/>
					))}
				</section>
			</form>
		</>
	);
};
