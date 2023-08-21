import '../../styles/index.scss';
import styles from './style.module.scss';
import Logo from '../../assets/Logo.svg';
import { LoginForm } from '../../components/Forms/LoginForm';

export const LoginPage = () => {
	return (
		<>
			<header className={styles.header}>
				<img src={Logo} alt='Logo' />
			</header>
			<main className={styles.main}>
				<LoginForm />
			</main>
		</>
	);
};
