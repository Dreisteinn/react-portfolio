import { ReactElement, createContext, useEffect, useState } from 'react';
import type { Project } from '../components/projects/Project.types';
import { getProjects } from '../services/getProjects';

type ProjectContextType = {
	projects: Project[];
};

const defaultValues = { projects: [] };

export const ProjectContext = createContext<ProjectContextType>(defaultValues);

const ProjectContextProvider = ({ children }: { children: ReactElement }) => {
	const [projects, setProjects] = useState<Project[]>([]);

	useEffect(() => {
		const retrievedProjects = async () => {
			const projects = await getProjects();
			setProjects(projects);
		};
		retrievedProjects();
	}, []);

	return <ProjectContext.Provider value={{ projects }}>{children}</ProjectContext.Provider>;
};

export default ProjectContextProvider;
