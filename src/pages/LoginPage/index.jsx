import styles from './style.module.scss';
import '../../styles/index.scss';
import { Header } from '../../components/Header';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<LoginForm />
			</main>
		</>
	);
};
