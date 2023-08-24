/* eslint-disable react/prop-types */
import styles from './style.module.scss';

export const Dashboard = ({ user, course_module }) => {
	return (
		<section className={styles.container}>
			<h1 className={styles.helloUser}>Olá, {user}</h1>
			<p className={styles.userModule}>{course_module}</p>
		</section>
	);
};
