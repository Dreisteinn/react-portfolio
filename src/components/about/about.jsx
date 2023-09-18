import styles from './about.module.css';
import { SiGnubash, SiReact, SiCss3, SiHtml5, SiFirebase, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { SiLaravel } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { Link, useNavigate } from 'react-router-dom';

const skillsAsElements = [
	<SiHtml5 className={styles.html} />,
	<SiCss3 className={styles.css} />,
	<IoLogoSass className={styles.sass} />,
	<IoLogoJavascript className={styles.js} />,
	<SiVuedotjs className={styles.vue} />,
	<SiReact className={styles.react} />,
	<SiTailwindcss className={styles.tailwind} />,
	<SiLaravel className={styles.laravel} />,
	<SiTypescript className={styles.typescript} />,
	<GrNode className={styles.node} />,
	<SiFirebase className={styles.firebase} />,
	<SiGnubash className={styles.bash} />,
];

const About = () => {
	const navigate = useNavigate();

	const navigateToProjects = (e) => {
		if (e.key === 'Enter') {
			navigate('/projects');
		}
	};

	return (
		<div className={styles.about}>
			<div className={styles.terminal_wrapper} tabIndex={-1} onKeyDown={navigateToProjects}>
				<h1>
					:<span className={styles.user}>~</span>$ cat about
				</h1>
				<p>
					I'm <strong>Giorgi Kvrivishvili</strong>, an Information Technology graduate who decided in 2021 to learn
					Web Development and dive into that field. So far my knowledge covers the fundamental concepts of Web,{' '}
					<b>HTML</b>, <b>CSS</b> (SASS/Tailwind), <b>Javascript</b>, <b>Typescript</b>, <b>React</b> and{' '}
					<b>Vue</b>. I'm highly focused on building reactive client-side apps, but besides working on a user
					interface, I create secure REST APIs using <b>Node/Express</b> and <b>Laravel</b>. I strive to improve
					and broaden my skill set by working on various kinds of personal projects. You can see some of them{' '}
					<Link to={'/projects'}>
						<i>here</i>
					</Link>
				</p>
				<h1>
					:<span className={styles.user}>~</span>$ cd projec
					<span className={styles.lastlet}>ts</span>
				</h1>
			</div>
			<ul className={styles.skills}>
				{skillsAsElements.map((skill, i) => {
					return <li key={i}>{skill}</li>;
				})}
			</ul>
		</div>
	);
};

export default About;
