import { deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity';
import { schemaTypes } from './src/sanity/schemas';

export const config = defineConfig({
	projectId: 'fb06ufjf',
	dataset: 'production',
	apiVersion: new Date().toISOString().substring(0, 10),
	title: 'Portfolio',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: {
		types: schemaTypes,
	},
});
