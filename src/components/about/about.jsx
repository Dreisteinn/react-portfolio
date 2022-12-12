import styles from './about.module.css';
import { SiGnubash, SiReact, SiCss3, SiHtml5, SiFirebase, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { GrNode } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const skillsAsElements = [
	<SiHtml5 className={styles.html} />,
	<SiCss3 className={styles.css} />,
	<IoLogoSass className={styles.sass} />,
	<IoLogoJavascript className={styles.js} />,
	<SiReact className={styles.react} />,
	<SiTypescript className={styles.typescript} />,
	<GrNode className={styles.node} />,
	<SiFirebase className={styles.firebase} />,
	<SiGnubash className={styles.bash} />,
];

const About = () => {
	return (
		<div className={styles.about}>
			<h1>
				:<span className={styles.user}>~</span>$ whoam
				<span className={styles.lastlet}>i</span>
			</h1>
			<p>
				I'm <b>George Kvrivishvili</b>, an Information Technology student who decided to learn Web Development and
				dive into that field. So far my knowledge covers the fundamentals of HTML, CSS/SASS, Javascript, Typescript,
				and React. Besides working on a user interface, I can build REST APIs using Node/Express and use Firebase's
				services such as Firestore, Cloud Storage, and Auth. Although I have no industrial experience yet, I strive
				to improve and broaden my skill set by working on personal projects. You can see some of them{' '}
				<Link to={'/projects'}>
					<i>here</i>
				</Link>
				.
			</p>
			<ul className={styles.skills}>
				{skillsAsElements.map((skill, i) => {
					return <li key={i}>{skill}</li>;
				})}
			</ul>
		</div>
	);
};

export default About;
