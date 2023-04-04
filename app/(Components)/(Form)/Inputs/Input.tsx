import React, {FormEvent} from 'react';
import styles from './styles.module.css';
import 'react-tooltip/dist/react-tooltip.css';
import {Tooltip} from 'react-tooltip';

interface InputProps {
	type?: string;
	value: string;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
	label: string;
	placeholder?: string;
	tooltipText?: string;
	required?: boolean;
	displayed?: boolean;
}

export const Input = ({
	type = 'text',
	value,
	setValue,
	label,
	placeholder,
	tooltipText,
	required = false,
	displayed = false,
}: InputProps) => {
	const labelId = label.substring(0, 3);
	return (
		<>
			{!displayed && (
				<label className={styles.label}>
					<div>
						{label}
						{tooltipText && (
							<>
								<span
									className={styles.info}
									data-tooltip-id={labelId}
									data-tooltip-content={tooltipText}
									data-tooltip-variant="info"
								>
									?
								</span>
								<Tooltip id={labelId} />
							</>
						)}
						{required === false && (
							<span className={styles.notRequired}>(Facultatif)</span>
						)}
					</div>
					<input
						required={required}
						className={styles.input}
						type={type}
						name={label}
						placeholder={placeholder}
						value={value}
						onChange={setValue}
					/>
				</label>
			)}
		</>
	);
};
