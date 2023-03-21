import React from 'react';
import {CategoriesList} from '../../../../src/DefaultProps/CategoriesList';
import {Checkbox} from '../Inputs/Checkbox';

export const VideoCategories: React.FC<{
	categoriesId: string[];
	addCategory: (newCategory: string) => void;
	removeCategory: (oldCategory: string) => void;
}> = ({categoriesId, addCategory, removeCategory}) => {
	const handleAddRemoveCategory = (checked: boolean, categoryId: string) => {
		checked ? removeCategory(categoryId) : addCategory(categoryId);
	};

	return (
		<section>
			{Object.entries(CategoriesList).map(
				([categoryName, categoryData], key) => (
					<Checkbox
						key={key}
						label={categoryData.name}
						categoryId={categoryName}
						handleChange={handleAddRemoveCategory}
						defaultCheck={Boolean(
							categoriesId.find((category) => category === categoryName)
						)}
					/>
				)
			)}
		</section>
	);
};
