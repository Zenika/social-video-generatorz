type CategoryProps = {name: string; icon: string};

type CategoriesListProps = Record<string, CategoryProps>;

export const CategoriesList: CategoriesListProps = {
	greenit: {
		name: 'Green IT',
		icon: '/BestOfTz/icons/greenit.svg',
	},
	securite: {
		name: 'Sécurité',
		icon: '/BestOfTz/icons/securite.svg',
	},
	cloud: {
		name: 'Cloud',
		icon: '/BestOfTz/icons/cloud.svg',
	},
	craft: {
		name: 'Craftsmanship',
		icon: '/BestOfTz/icons/dev.svg',
	},
	dev: {
		name: 'Backend/Frontend',
		icon: '/BestOfTz/icons/dev.svg',
	},
	devops: {
		name: 'Devops',
		icon: '/BestOfTz/icons/devops.svg',
	},
	innovation: {
		name: 'Innovation',
		icon: '/BestOfTz/icons/innovation.svg',
	},
	agilite: {
		name: 'Agilité',
		icon: '/BestOfTz/icons/agilite.svg',
	},
	architecture: {
		name: 'Architecture',
		icon: '/BestOfTz/icons/architecture.svg',
	},
	mobile: {
		name: 'Mobile',
		icon: '/BestOfTz/icons/mobile.svg',
	},
	support: {
		name: 'Fonctions Support',
		icon: '/BestOfTz/icons/support.svg',
	},
	data: {
		name: 'Data',
		icon: '/BestOfTz/icons/data.svg',
	},
	design: {
		name: 'Design',
		icon: '/BestOfTz/icons/design.svg',
	},
	ia: {
		name: 'IA',
		icon: '/BestOfTz/icons/ia.svg',
	},
	surprise: {
		name: 'Surprise',
		icon: '/BestOfTz/icons/surprise.svg',
	},
};
