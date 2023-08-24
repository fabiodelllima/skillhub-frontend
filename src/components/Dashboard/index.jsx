/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from './style.module.scss';

export const Dashboard = ({ user }) => {
	const inDevelopmentText = 'Que pena! Estamos em desenvolvimento :(';
	const inDevelopmentSubText =
		'Nossa aplicação está em desenvolvimento, em breve teremos novidades.';

	return (
		<>
			<section className={styles.container}>
				<div className={styles.subContainer}>
					<h1 className={styles.helloUser}>Olá, {user?.name}</h1>
					<p className={styles.userModule}>{user?.course_module}</p>
				</div>
			</section>
			<section className={styles.inDevelopmentContainer}>
				<h1 className={styles.inDevelopmentText}>{inDevelopmentText}</h1>
				<p className={styles.inDevelopmentSubText}>{inDevelopmentSubText}</p>
			</section>
		</>
	);
};
