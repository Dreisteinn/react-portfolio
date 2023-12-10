import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import Socials from './Socials';
import { HomePageData } from '../../types/sanity';
import { getHomePageContent } from '../../services/sanity';

const Main = () => {
	const [pageContent, setPageContent] = useState<HomePageData>();

	useEffect(() => {
		const fetch = async () => {
			const data = await getHomePageContent();
			setPageContent(data[1]);
		};
		fetch();
	}, []);

	return (
		<main className={styles.wrapper}>
			<article>
				<h3 className={styles.greeting}>{pageContent?.greeting}</h3>
				<h3 className={styles.me}>
					I'm <span>{pageContent?.name}</span>
				</h3>
				<h4>{pageContent?.specialty}</h4>
			</article>
			<Socials />
		</main>
	);
};

export default Main;
