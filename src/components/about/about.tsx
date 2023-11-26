import styles from './about.module.css';
import { SiGnubash, SiReact, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { SiLaravel } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import terminalLogo from '../../images/hyper-seeklogo.com.svg';

const skillsAsElements = [
	<SiTypescript className={styles.typescript} />,
	<IoLogoJavascript className={styles.js} />,
	<SiVuedotjs className={styles.vue} />,
	<SiReact className={styles.react} />,
	<SiTailwindcss className={styles.tailwind} />,
	<IoLogoSass className={styles.sass} />,
	<SiLaravel className={styles.laravel} />,
	<GrNode className={styles.node} />,
	<SiGnubash className={styles.bash} />,
];

const About = () => {
	const navigate = useNavigate();
	const [showTerminal, setShowTerminal] = useState(true);
	const [maximize, setMaximize] = useState(false);
	const [minimize, setMinimize] = useState(false);

	const navigateToProjects = (e) => {
		if (e.key === 'Enter') {
			navigate('/projects');
		}
	};

	return (
		<div className={styles.about}>
			{showTerminal && (
				<div
					className={`${styles.terminal_wrapper} ${maximize && styles.maximized} ${minimize && styles.minimized}`}
					tabIndex={-1}
					onKeyDown={navigateToProjects}
				>
					<div className={styles.titlebar_buttons}>
						<div
							className={`${styles.close} ${styles.titlebar_button}`}
							onClick={() => setShowTerminal((prev) => !prev)}
						></div>
						<div
							className={`${styles.maximize} ${styles.titlebar_button}`}
							onClick={() => setMaximize((prev) => !prev)}
						></div>
						<div
							className={`${styles.minimize} ${styles.titlebar_button}`}
							onClick={() => setMinimize((prev) => !prev)}
						></div>
					</div>
					<h1>
						:<span className={styles.user}>~</span>$ cat bio
					</h1>
					<p>
						Giorgi Kvrivishvili is an Information Technology graduate who decided in 2021 to learn Web Development
						and dive into the field. His knowledge covers the fundamental web concepts and the following
						technologies: <b>HTML</b>, <b>CSS</b> (Sass,Tailwind), <b>Javascript</b>, <b>Typescript</b>,{' '}
						<b>React</b>, and <b>Vue</b>. He's mainly focused on the front-end. However, besides building reactive
						client-side apps, he crafts secure REST APIs using <b>Node/Express</b> and <b>Laravel</b>. Giorgi
						strives to improve and broaden his skill set by working on various kinds of side projects.
					</p>
					<h1>
						:<span className={styles.user}>~</span>$ browse projec
						<span className={styles.lastlet}>ts</span>
					</h1>
				</div>
			)}
			<ul className={styles.skills}>
				{skillsAsElements.map((skill, i) => {
					return <li key={i}>{skill}</li>;
				})}
			</ul>
			{minimize && (
				<img
					src={terminalLogo}
					alt='terminal'
					className={styles.terminal_logo}
					onClick={() => setMinimize((prev) => !prev)}
				/>
			)}
		</div>
	);
};

export default About;
