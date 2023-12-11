import { client } from '../../sanity.config';
import { AboutPageData, HomePageData, ProjectData } from '../types/sanity';

export const getHomePageContent = async (): Promise<HomePageData[]> => {
	return await client.fetch('*[_type == "home"]{greeting, name, specialty, socialLinks}');
};

export const getAboutPageContent = async (): Promise<AboutPageData[]> => {
	return await client.fetch('*[_type == "about"]{bio, primaryCommand, secondaryCommand}');
};

export const getProjectsData = async (): Promise<ProjectData[]> => {
	return await client.fetch('*[_type == "project"] | order(_createdAt asc) {name, image, slug, demo, code, techs}');
};
