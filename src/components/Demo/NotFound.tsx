import styles from './Demo.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className={styles.demo_not_found}>
			<h1>404</h1>
			<h2>Requested demo not found</h2>
			<Link to='/projects'>Go back to projects</Link>
		</div>
	);
};

export default NotFound;
