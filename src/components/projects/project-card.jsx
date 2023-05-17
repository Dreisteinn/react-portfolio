import styles from './projects.module.css';

const Project = (props) => {
	const { name, techs, code, demo, img } = props;
	return (
		<li className={styles.project}>
			<img src={img} alt={name} className={styles.img}></img>
			<div className={styles.details}>
				<h4>{name}</h4>
				<a href={demo} target='_blank' rel='noreferrer'>
					Demo
				</a>
				<a href={code} target='_blank' rel='noreferrer'>
					Source Code
				</a>
				<ul className={styles.techs}>
					{techs.map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
			</div>
		</li>
	);
};

export default Project;
