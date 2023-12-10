import { Studio } from 'sanity';
import { config } from '../../../sanity.config';
import styles from './Admin.module.css';

const Admin = () => {
	return (
		<div className={styles.Wrapper}>
			<Studio config={config} />
		</div>
	);
};

export default Admin;
