import { client } from '../../sanity.config';
import { HomePageData } from '../types/sanity';

export const getHomePageData = async (): Promise<HomePageData> => {
	const homePageData = await client.fetch('*[_type == "home"]');
	return homePageData;
};
