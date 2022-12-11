import styles from './main.module.css';
import Socials from './socials';
const Main = () => {
	return (
		<main className={styles.wrapper}>
			<article>
				<h3 className={styles.greeting}>Hey there!</h3>
				<h3 className={styles.me}>
					I'm <span>George Kvrivishvili </span>
				</h3>
				<h4>a Front-End Web Developer</h4>
			</article>
			<Socials />
		</main>
	);
};

export default Main;
