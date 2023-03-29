import React, {useState} from 'react';
import styles from './styles.module.css';

interface CheckboxProps {
	label: string;
	categoryId?: string;
	handleChange: (checked: boolean, data?: string) => void;
	defaultCheck?: boolean;
	disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	categoryId = '',
	handleChange,
	defaultCheck = false,
	disabled = false,
}) => {
	const [checked, setChecked] = useState(defaultCheck);

	const handleCheck = () => {
		setChecked(!checked);
		handleChange(checked, categoryId);
	};

	return (
		<label
			className={`${styles.checkbox} ${disabled ? styles.inputDisabled : ''}`}
		>
			<input
				type="checkbox"
				checked={checked}
				disabled={disabled}
				onChange={handleCheck}
			/>
			{label}
		</label>
	);
};
