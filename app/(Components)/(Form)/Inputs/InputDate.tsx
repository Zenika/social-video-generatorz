import React from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './styles.module.css';

registerLocale('fr', fr);

export interface InputDateProps {
	value: Date;
	setValue: (date: Date) => void;
	label: string;
}

export const InputDate: React.FC<InputDateProps> = ({
	value,
	setValue,
	label,
}) => {
	return (
		<label className={`${styles.label} ${styles.midSize}`}>
			{label}
			<DatePicker
				className={styles.input}
				locale="fr"
				selected={value}
				onChange={(date: Date) => setValue(date)}
			/>
		</label>
	);
};
