import React, {useState} from 'react';

export const Checkbox: React.FC<{
	label: string;
	categoryId: string;
	addCategory: (newCategory: string) => void;
	removeCategory: (oldCategory: string) => void;
	defaultCheck?: boolean;
}> = ({
	label,
	categoryId,
	addCategory,
	removeCategory,
	defaultCheck = false,
}) => {
	const [checked, setChecked] = useState(defaultCheck);

	const handleChange = () => {
		setChecked(!checked);
		checked ? removeCategory(categoryId) : addCategory(categoryId);
	};

	return (
		<label style={{userSelect: 'none'}}>
			<input type="checkbox" checked={checked} onChange={handleChange} />
			{label}
		</label>
	);
};
