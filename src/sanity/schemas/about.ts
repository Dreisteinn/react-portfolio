export default {
	title: 'About',
	name: 'about',
	type: 'document',
	fields: [
		{
			title: 'Biography',
			name: 'bio',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			title: 'Primary Command',
			name: 'primaryCommand',
			type: 'string',
		},
		{
			title: 'Secondary Command',
			name: 'secondaryCommand',
			type: 'string',
		},
	],
};
