import React, {useState} from 'react';

interface CheckboxProps {
	label: string;
	categoryId: string;
	handleChange: (checked: boolean, data: string) => void;
	defaultCheck?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	label,
	categoryId,
	handleChange,
	defaultCheck = false,
}) => {
	const [checked, setChecked] = useState(defaultCheck);

	const handleCheck = () => {
		setChecked(!checked);
		handleChange(checked, categoryId);
	};

	return (
		<label style={{userSelect: 'none'}}>
			<input type="checkbox" checked={checked} onChange={handleCheck} />
			{label}
		</label>
	);
};
