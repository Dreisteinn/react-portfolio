import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

const useProjectContext = () => {
	return useContext(ProjectContext);
};

export default useProjectContext;
