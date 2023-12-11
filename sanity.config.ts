import { StructureBuilder, deskTool } from 'sanity/desk';
import { defineConfig } from 'sanity';
import { schemaTypes } from './src/sanity/schemas';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const config = defineConfig({
	projectId: 'fb06ufjf',
	dataset: 'production',
	apiVersion: new Date().toISOString().substring(0, 10),
	title: 'Content Management Space',
	basePath: '/admin',
	plugins: [
		deskTool({
			structure: (S) =>
				S.list()
					.title('Content')
					.items([
						singletonListItem(S, 'home', 'Home'),
						S.documentTypeListItem('project').title('Project'),
						singletonListItem(S, 'about', 'About'),
					]),
		}),
	],
	schema: {
		types: schemaTypes,
	},
});

export const client = createClient({
	projectId: 'fb06ufjf',
	dataset: 'production',
	apiVersion: new Date().toISOString().substring(0, 10),
	useCdn: true,
});

const builder = imageUrlBuilder(client);

export const getImageUrl = (source: string) => builder.image(source)?.url();

const singletonListItem = (S: StructureBuilder, typeName: string, title?: string) =>
	S.listItem()
		.title(title || typeName)
		.id(typeName)
		.child(S.document().schemaType(typeName).documentId(typeName));
