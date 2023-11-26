import styles from './main.module.css';
import Socials from './socials';
const Main = () => {
	return (
		<main className={styles.wrapper}>
			<article>
				<h3 className={styles.greeting}>Hi there!</h3>
				<h3 className={styles.me}>
					I'm <span>Giorgi Kvrivishvili </span>
				</h3>
				<h4>a Full-Stack Web Developer</h4>
				<h4>mainly focused on a client side</h4>
			</article>
			<Socials />
		</main>
	);
};

export default Main;
