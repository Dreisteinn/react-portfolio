import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import useProjectContext from '../hooks/useProjectContext';

const Demo = () => {
	const { project } = useParams();
	const { projects } = useProjectContext();

	const targetProject = projects.find((item) => item.slug === project);

	if (targetProject && targetProject.slug) {
		return (
			<div className='demo_wrapper'>
				<iframe
					className='demo'
					src={targetProject.demo}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				></iframe>
			</div>
		);
	} else {
		return <Navigate to='/projects' />;
	}
};

export default Demo;
