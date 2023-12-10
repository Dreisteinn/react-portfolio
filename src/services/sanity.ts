import { client } from '../../sanity.config';
import { AboutPageData, HomePageData } from '../types/sanity';

export const getHomePageContent = async (): Promise<HomePageData[]> => {
	return await client.fetch('*[_type == "home"]{greeting, name, specialty}');
};

export const getAboutPageContent = async (): Promise<AboutPageData[]> => {
	return await client.fetch('*[_type == "about"]{bio, primaryCommand, secondaryCommand}');
};
