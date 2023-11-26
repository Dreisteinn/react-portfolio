import { useParams } from 'react-router-dom';
import useProjectContext from '../../hooks/useProjectContext';
import type { Project } from '../Projects/Project.types';
import { useEffect, useState } from 'react';
import DemoNotFound from './NotFound';

const Demo = () => {
	const { project } = useParams();
	const { projects, isFetching } = useProjectContext();
	const [targetProject, setTargetProject] = useState<Project>();

	useEffect(() => {
		if (projects) {
			setTargetProject(projects.find((item) => item.slug === project));
		}
	}, [projects, project]);

	if (isFetching) {
		return <h1>Loading...</h1>;
	}
	if (projects.length && !targetProject) {
		return <DemoNotFound />;
	}
	return (
		<div className='demo_wrapper'>
			<iframe
				className='demo'
				src={targetProject?.demo}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			></iframe>
		</div>
	);
};

export default Demo;
