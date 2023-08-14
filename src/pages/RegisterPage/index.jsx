import '../../styles/index.scss';
import styles from './style.module.scss';
import { Header } from '../../components/Header';
import { RegisterForm } from '../../components/RegisterForm';

export const RegisterPage = () => {
	return (
		<>
			<Header buttonText='Voltar' />
			<main className={styles.main}>
				<RegisterForm />
			</main>
		</>
	);
};
