import {AbsoluteFill} from 'remotion';

import React from "react";
import {SpeakerProps} from "../../Types/SpeakerProps";
import {Speaker} from "./Speaker";

export const Speakers: React.FC<{speakers: SpeakerProps[]}> = ({speakers}) => {
	return (
		<AbsoluteFill
			style={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: `repeat(${speakers.length}, 1fr)`,
				padding: '0 200px',
			}}
		>
			{speakers.map((speaker) => {
				return (
					<div
						key={speaker.name}
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Speaker
							picture={speaker.picture}
							name={speaker.name}
						/>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
