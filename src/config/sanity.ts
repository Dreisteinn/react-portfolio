import { createClient } from '@sanity/client';
import { HomePageData } from '../types/sanity';

export const client = createClient({
	projectId: 'fb06ufjf',
	dataset: 'production',
	apiVersion: new Date().toISOString().substring(0, 10),
	useCdn: true,
});

export const getHomePageData = async (): Promise<HomePageData> => {
	const homePageData = await client.fetch('*[_type == "home"]');
	return homePageData;
};
