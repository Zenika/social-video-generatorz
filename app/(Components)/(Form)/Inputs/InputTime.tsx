import React from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import {InputDateProps} from './InputDate';
import styles from './styles.module.css';

registerLocale('fr', fr);

export const InputTime: React.FC<InputDateProps> = ({
	value,
	setValue,
	label,
	midWidth = false,
}) => {
	return (
		<label className={`${styles.label} ${midWidth ? styles.midWidth : ''}`}>
			{label}
			<DatePicker
				showTimeSelect
				showTimeSelectOnly
				timeIntervals={15}
				dateFormat="HH:mm"
				locale="fr"
				className={styles.input}
				selected={value}
				timeCaption="Heure"
				onChange={(date: Date) => setValue(date)}
			/>
		</label>
	);
};
