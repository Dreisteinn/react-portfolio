import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from 'react-icons/si';
import styles from './socials.module.css';
const Socials = () => {
	return (
		<ul className={styles.list}>
			<a href='https://github.com/GeekoIsaGeek' target='_blank' rel='noreferrer'>
				<SiGithub />
			</a>
			<a href='https://www.linkedin.com/in/giorgi-kvrivishvili-5667321b4' target='_blank' rel='noreferrer'>
				<SiLinkedin />
			</a>
			<a href='https://twitter.com/awemarou' target='_blank' rel='noreferrer'>
				<SiTwitter />
			</a>
			<a href='mailto:george.kvrivi@gmail.com'>
				<SiGmail />
			</a>
		</ul>
	);
};

export default Socials;
