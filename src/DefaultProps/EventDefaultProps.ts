export const EventDefaultProps = {
	title: 'L’évenement imaginé par les Techs pour les Techs',
	city: 'lyon',
	date: '28 Novembre 2023',
	time: '17h00',
	onlinePlatform: 'workadventure',
	contact: {
		name: 'Lucas Audart',
		picture: 'https://ca.slack-edge.com/T02ARLB3P-U02H7C4H6PJ-eb62023feb1e-512',
		role: 'Consultant frontend',
		location: 'lyon',
		mail: 'lucas.audart@zenika.com',
		phone: '06 57 29 32 64',
	},
	categories: [
		{
			name: 'Green IT',
			icon: '/BestOfTz/icons/GreenIT.svg',
		},
		{
			name: 'Sécurité',
			icon: '/BestOfTz/icons/Sécurité.svg',
		},
		{
			name: 'Cloud',
			icon: '/BestOfTz/icons/Cloud.svg',
		},
		{
			name: 'Craftsmanship',
			icon: '/BestOfTz/icons/Dev.svg',
		},
	],
};

export const EventFormProps = {
	id: 'event',
	intro: ['title', 'city', 'online_platform', 'date', 'time'],
	categories: {numberOfCategory: 4, fields: ['category_name', 'category_icon']},
	contact: ['name', 'picture', 'role', 'location', 'mail', 'phone'],
};
