import React, {FormEvent} from 'react';

export interface InputProps {
	value?: string;
	setValue: (event: FormEvent<HTMLInputElement>) => void;
	label: string;
	placeholder?: string;
}

export const Input = ({value, setValue, label, placeholder}: InputProps) => {
	return (
		<label
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
				fontWeight: 'bold',
				gap: '10px',
			}}
		>
			{label}
			<input
				className="text-black"
				type="text"
				name={label}
				value={value}
				style={{
					padding: '10px',
					borderRadius: '5px',
					border: 'none',
				}}
				placeholder={placeholder}
				onChange={setValue}
			/>
		</label>
	);
};
