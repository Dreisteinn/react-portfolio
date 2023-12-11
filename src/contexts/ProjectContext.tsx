import { ReactElement, createContext, useEffect, useState } from 'react';
import { getProjectsData } from '../services/sanity';
import { ProjectData } from '../types/sanity';

type ProjectContextType = {
	projects: ProjectData[];
	isFetching: boolean;
};

const defaultValues = { projects: [], isFetching: false };

export const ProjectContext = createContext<ProjectContextType>(defaultValues);

const ProjectContextProvider = ({ children }: { children: ReactElement }) => {
	const [projects, setProjects] = useState<ProjectData[]>([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		setIsFetching(true);
		const setRetrievedProjects = async () => {
			const projects = await getProjectsData();
			console.log(projects);
			setProjects(projects);
			setIsFetching(false);
		};
		setRetrievedProjects();
	}, []);

	return <ProjectContext.Provider value={{ projects, isFetching }}>{children}</ProjectContext.Provider>;
};

export default ProjectContextProvider;
