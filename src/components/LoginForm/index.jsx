import styles from './style.module.scss';
import { useState } from 'react';
import { Input } from '../Form/Input';

export const LoginForm = () => {
	const [inputValue, setInputValue] = useState('');

	return (
		<section className={styles.loginContainer}>
			<form action='' className={styles.formContainer}>
				<h1 className={styles.title}>Login</h1>
				<Input
					label='Email'
					type='text'
					name='Email'
					id='Email'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Input
					label='Senha'
					type='password'
					name='Senha'
					id='Senha'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
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
