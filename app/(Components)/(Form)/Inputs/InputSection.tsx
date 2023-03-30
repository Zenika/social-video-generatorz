import React from 'react';
import {Input} from './Input';
import {InputDate} from './InputDate';
import {InputTime} from './InputTime';
import styles from './styles.module.css';

export const InputSection: React.FC<{InputList: object}> = ({InputList}) => {
	return (
		<div className={styles.inputList}>
			{Object.entries(InputList).map(([label, input], key) => {
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
						label={input.label}
						midWidth={input.midWidth}
						placeholder={input.placeholder}
						tooltipText={input.tooltipText}
						required={input.required}
					/>
				);
			})}
		</div>
	);
};
