import { useParams } from 'react-router-dom';
import useProjectContext from '../../hooks/useProjectContext';
import { useEffect, useState } from 'react';
import DemoNotFound from './NotFound';
import { ProjectData } from '../../types/sanity';

const Demo = () => {
	const { project } = useParams();
	const { projects, isFetching } = useProjectContext();
	const [targetProject, setTargetProject] = useState<ProjectData>();

	useEffect(() => {
		if (projects.length) {
			setTargetProject(projects.find((item) => item?.slug?.current === project));
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
