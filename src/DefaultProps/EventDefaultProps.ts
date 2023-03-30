export const EventDefaultProps = {
	title: 'L’évenement imaginé par les Techs pour les Techs',
	remoteOnly: false,
	city: 'lyon',
	date: '28 Novembre 2023',
	time: '17h00',
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
			icon: '/BestOfTz/icons/greenit.svg',
		},
		{
			name: 'Sécurité',
			icon: '/BestOfTz/icons/securite.svg',
		},
		{
			name: 'Cloud',
			icon: '/BestOfTz/icons/cloud.svg',
		},
		{
			name: 'Craftsmanship',
			icon: '/BestOfTz/icons/dev.svg',
		},
	],
};

export const EventDefaultCategories = ['greenit', 'securite', 'cloud', 'craft'];
