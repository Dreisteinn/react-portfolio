import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from 'react-icons/si';
import styles from './Socials.module.css';
import { HomePageData } from '../../types/sanity';

const Socials = ({ links }: { links: HomePageData['socialLinks'] }) => {
	const icons = [<SiGithub />, <SiLinkedin />, <SiTwitter />, <SiGmail />];

	return (
		<ul className={styles.list}>
			{links?.map((link, index) => (
				<a key={index} href={link} target='_blank' rel='noreferrer'>
					{icons[index]}
				</a>
			))}
		</ul>
	);
};

export default Socials;
