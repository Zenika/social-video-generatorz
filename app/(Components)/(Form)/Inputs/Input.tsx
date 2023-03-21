import React, {FormEvent} from 'react';
import styles from '../styles.module.css';

interface InputProps {
	type?: string;
	value: string;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
	label: string;
	placeholder?: string;
}

export const Input = ({
	type = 'text',
	value,
	setValue,
	label,
	placeholder,
}: InputProps) => {
	return (
		<label className={styles.label}>
			{label}
			<input
				className={styles.input}
				type={type}
				name={label}
				placeholder={placeholder}
				value={value}
				onChange={setValue}
			/>
		</label>
	);
};
