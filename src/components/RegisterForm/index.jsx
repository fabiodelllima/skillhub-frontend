import styles from './style.module.scss';
import { useState } from 'react';
import { Input } from '../Form/Input';
import { Select } from '../Form/Select';

export const RegisterForm = () => {
	const [inputValue, setInputValue] = useState('');

	return (
		<section className={styles.loginContainer}>
			<form action='' className={styles.formContainer}>
				<h1 className={styles.title}>Crie sua conta</h1>
				{/* <p>Rápido e grátis, vamos nessa</p> */}
				<Input
					label='Nome'
					type='text'
					name='name'
					id='name'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Input
					label='Email'
					type='text'
					name='email'
					id='email'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Input
					label='Senha'
					type='password'
					name='password'
					id='password'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Input
					label='Confirmar Senha'
					type='password'
					name='confirmpassword'
					id='confirmpassword'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Input
					label='Bio'
					type='password'
					name='bio'
					id='bio'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Input
					label='Contato'
					type='password'
					name='contact'
					id='contact'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					required={true}
				/>
				<Select
					label='Selecionar módulo'
					name='module'
					id='module'
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.select}
					required={true}
				/>
				<button className={styles.buttonPrimaryNegative} type='submit'>
					Cadastrar
				</button>
			</form>
		</section>
	);
};
