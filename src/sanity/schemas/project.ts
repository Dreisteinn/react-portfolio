export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Project Name',
			type: 'string',
		},
		{
			name: 'image',
			title: 'Project Image',
			type: 'image',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
		},
		{
			name: 'demo',
			title: 'Project Demo',
			type: 'url',
		},
		{
			name: 'code',
			title: 'Source Code',
			type: 'url',
		},
		{
			name: 'techs',
			title: 'Technologies Used',
			type: 'array',
			of: [{ type: 'string' }],
		},
	],
};
