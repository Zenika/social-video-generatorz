import React from 'react';
import {Input} from '../Input';
import {InputDate} from '../InputDate';
import {InputTime} from '../InputTime';

export const VideoIntro: React.FC<{introInputs: object}> = ({introInputs}) => {
	return (
		<section>
			{Object.entries(introInputs).map(([label, input], key) => {
				const InputComponent =
					label === 'date' ? InputDate : label === 'time' ? InputTime : Input;
				return (
					<InputComponent
						key={key}
						value={input.data}
						setValue={input.setData}
						label={label}
					/>
				);
			})}
		</section>
	);
};
