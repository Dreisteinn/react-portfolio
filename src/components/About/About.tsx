import styles from './About.module.css';
import { SiGnubash, SiReact, SiTypescript, SiLaravel, SiVuedotjs, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { GrNode } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { KeyboardEvent } from 'react';
import terminalLogo from '../../images/hyper-seeklogo.com.svg';
import { AboutPageData } from '../../types/sanity';
import { getAboutPageContent } from '../../services/sanity';
import { PortableText } from '@portabletext/react';

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
	const [canShowTerminal, setCanShowTerminal] = useState(true);
	const [canMaximize, setCanMaximize] = useState(false);
	const [canMinimize, setCanMinimize] = useState(false);
	const [pageContent, setPageContent] = useState<AboutPageData>();

	const navigateToProjects = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			navigate('/projects');
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await getAboutPageContent();
			setPageContent(data[0]);
		};
		fetchData();
	}, []);

	return (
		<div className={styles.about}>
			{canShowTerminal && pageContent && (
				<div
					className={`${styles.terminal_wrapper} ${canMaximize && styles.maximized} ${
						canMinimize && styles.minimized
					}`}
					tabIndex={-1}
					onKeyDown={navigateToProjects}
				>
					<div className={styles.titlebar_buttons}>
						<div
							className={`${styles.close} ${styles.titlebar_button}`}
							onClick={() => setCanShowTerminal((prev) => !prev)}
						></div>
						<div
							className={`${styles.maximize} ${styles.titlebar_button}`}
							onClick={() => setCanMaximize((prev) => !prev)}
						></div>
						<div
							className={`${styles.minimize} ${styles.titlebar_button}`}
							onClick={() => setCanMinimize((prev) => !prev)}
						></div>
					</div>

					<h1>
						:<span className={styles.user}>~</span>$ {pageContent?.primaryCommand && pageContent?.primaryCommand}
					</h1>
					{pageContent?.bio[0] && <PortableText value={pageContent?.bio[0]} />}

					<h1>
						:<span className={styles.user}>~</span>${' '}
						{pageContent?.secondaryCommand && pageContent?.secondaryCommand}
						<span className={styles.lastlet}></span>
					</h1>
				</div>
			)}

			<ul className={styles.skills}>
				{skillsAsElements.map((skill, i) => {
					return <li key={i}>{skill}</li>;
				})}
			</ul>

			{canMinimize && (
				<img
					src={terminalLogo}
					alt='terminal'
					className={styles.terminal_logo}
					onClick={() => setCanMinimize((prev) => !prev)}
				/>
			)}
		</div>
	);
};

export default About;
