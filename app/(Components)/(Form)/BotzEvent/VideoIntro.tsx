import React from 'react';
import {Input} from '../Input';
import {InputDate} from '../InputDate';
import {InputTime} from '../InputTime';

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
