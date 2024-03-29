import React, {useMemo} from 'react';
import {CategoriesList} from '../../../../src/DefaultProps/CategoriesList';
import {Checkbox} from '../Inputs/Checkbox';
import styles from '../styles.module.css';

export const VideoCategories: React.FC<{
	categoriesId: string[];
	addCategory: (newCategory: string) => void;
	removeCategory: (oldCategory: string) => void;
}> = ({categoriesId, addCategory, removeCategory}) => {
	const handleAddRemoveCategory = (checked: boolean, categoryId: string) => {
		checked ? removeCategory(categoryId) : addCategory(categoryId);
	};

	const maxSelected = useMemo(() => categoriesId.length >= 4, [categoriesId]);

	return (
		<div className={styles.categories}>
			{Object.entries(CategoriesList).map(
				([categoryName, categoryData], key) => {
					const inCategoriesId = categoriesId.find(
						(category) => category === categoryName
					);
					return (
						<Checkbox
							key={key}
							label={categoryData.name}
							categoryId={categoryName}
							handleChange={handleAddRemoveCategory}
							defaultCheck={Boolean(inCategoriesId)}
							disabled={!inCategoriesId && maxSelected}
						/>
					);
				}
			)}
		</div>
	);
};
