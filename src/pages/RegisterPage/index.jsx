import '../../styles/index.scss';
import styles from './style.module.scss';
import { RegisterForm } from '../../components/Forms/RegisterForm';
import { RegisterHeader } from '../../components/Forms/RegisterForm/RegisterHeader';

export const RegisterPage = () => {
	return (
		<>
			<RegisterHeader buttonText='Voltar' />
			<main className={styles.main}>
				<RegisterForm />
			</main>
		</>
	);
};
