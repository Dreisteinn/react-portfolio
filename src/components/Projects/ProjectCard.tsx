import React from 'react';
import styles from './Projects.module.css';
import type { Project } from './Project.types';

const ProjectCard = ({ name, techs, code, demo, image, slug }: Project) => {
	console.log(slug, demo);
	return (
		<li className={styles.project}>
			<img src={image} alt={name} className={styles.img}></img>
			<div className={styles.details}>
				<h4>{name}</h4>
				<a href={demo.startsWith('https://yout') ? `/demo/${slug}` : demo} target='_blank' rel='noreferrer'>
					Demo
				</a>
				<a href={code ? code : ''} target='_blank' rel='noreferrer'>
					Source Code
				</a>
				<ul className={styles.techs}>
					{techs.map((tech, i) => (
						<li key={i}>{React.createElement(tech)}</li>
					))}
				</ul>
			</div>
		</li>
	);
};

export default ProjectCard;
