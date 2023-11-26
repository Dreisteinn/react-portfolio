import { ReactElement, createContext, useEffect, useState } from 'react';
import type { Project } from '../components/Projects/Project.types';
import { getProjects } from '../services/getProjects';

type ProjectContextType = {
	projects: Project[];
	isFetching: boolean;
};

const defaultValues = { projects: [], isFetching: false };

export const ProjectContext = createContext<ProjectContextType>(defaultValues);

const ProjectContextProvider = ({ children }: { children: ReactElement }) => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		setIsFetching(true);
		const setRetrievedProjects = async () => {
			const projects = await getProjects();
			setProjects(projects);
			setIsFetching(false);
		};
		setRetrievedProjects();
	}, []);

	return <ProjectContext.Provider value={{ projects, isFetching }}>{children}</ProjectContext.Provider>;
};

export default ProjectContextProvider;
