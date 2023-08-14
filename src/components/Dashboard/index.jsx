/* eslint-disable react/prop-types */
import styles from './style.module.scss';

export const Dashboard = ({ userName }) => {
	return (
		<section className={styles.container}>
			<h1 className={styles.helloUser}>Olá, {userName}</h1>
			<p className={styles.userModule}>
				Primeiro módulo (Introdução ao Frontend)
			</p>
		</section>
	);
};
