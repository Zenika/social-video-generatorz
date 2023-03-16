type CategoryProps = {name: string; icon: string};

type CategoriesListProps = Record<string, CategoryProps>;

export const CategoriesList: CategoriesListProps = {
	greenit: {
		name: 'Green IT',
		icon: '/BestOfTz/icons/GreenIT.svg',
	},
	securite: {
		name: 'Sécurité',
		icon: '/BestOfTz/icons/Sécurité.svg',
	},
	cloud: {
		name: 'Cloud',
		icon: '/BestOfTz/icons/Cloud.svg',
	},
	craft: {
		name: 'Craftsmanship',
		icon: '/BestOfTz/icons/Dev.svg',
	},
	test: {
		name: 'Test',
		icon: '/BestOfTz/icons/Dev.svg',
	},
};
