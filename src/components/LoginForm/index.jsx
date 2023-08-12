import styles from './style.module.scss';
export const LoginForm = () => {
	return (
		<section className={styles.loginContainer}>
			<form action='' className={styles.formContainer}>
				<h1 className={styles.title}>Login</h1>
				<label htmlFor=''>Email</label>
				<input className={styles.input} type='text' name='' id='' />
				<label htmlFor=''>Senha</label>
				<input className={styles.input} type='password' name='' id='' />
				<button className={styles.buttonPrimary} type='submit'>
					Entrar
				</button>
			</form>
			<div className={styles.registerSubContainer}>
				<p className={styles.paragraph}>Ainda não possui uma conta?</p>
				<button className={styles.buttonSecondary}>Cadastre-se</button>
			</div>
		</section>
	);
};
