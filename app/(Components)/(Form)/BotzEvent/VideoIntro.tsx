import React from 'react';
import {Input} from '../Inputs/Input';
import {InputDate} from '../Inputs/InputDate';
import {InputTime} from '../Inputs/InputTime';

export const VideoIntro: React.FC<{introInputs: object}> = ({introInputs}) => {
	return (
		<section>
			{Object.entries(introInputs).map(([label, input], key) => {
				let InputComponent: React.FC<any> = Input;
				switch (label) {
					case 'date':
						InputComponent = InputDate;
						break;
					case 'time':
						InputComponent = InputTime;
						break;
					default:
						InputComponent = Input;
						break;
				}
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
