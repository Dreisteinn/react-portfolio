export default {
	title: 'About',
	name: 'about',
	type: 'document',
	__experimental_actions: [],
	fields: [
		{
			title: 'Biography',
			name: 'bio',
			type: 'array',
			of: [{ type: 'block' }],
		},
		{
			title: 'Primary Command',
			name: 'topmostCommand',
			type: 'string',
		},
		{
			title: 'Secondary Command',
			name: 'secondaryCommand',
			type: 'string',
		},
	],
};
