/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './style.module.scss';

export const Dashboard = ({ user }) => {
	return (
		<section className={styles.container}>
			<h1 className={styles.helloUser}>Olá, {user?.name}</h1>
			<p className={styles.userModule}>{user?.course_module}</p>
		</section>
	);
};
