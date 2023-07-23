import React from 'react';
import { useParams } from 'react-router-dom';
import List from './projects/projects-list';
import { Navigate } from 'react-router-dom';

const Demo = () => {
	const { project } = useParams();
	const targetProject = List.find((item) => item.slug === project);

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
