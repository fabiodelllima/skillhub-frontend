import styles from './style.module.scss';
import { Input } from '../Form/Input';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './loginFormSchema';

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	const submit = (formData) => {
		console.log(formData);
		console.table(formData);
	};

	return (
		<section className={styles.loginContainer}>
			<form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
				<h1 className={styles.title}>Login</h1>
				<Input
					label='Email'
					type='text'
					name='Email'
					id='Email'
					className={styles.input}
					required={true}
					register={register('email')}
					error={errors.email}
				/>
				<Input
					label='Senha'
					type='password'
					name='Senha'
					id='Senha'
					className={styles.input}
					required={true}
					register={register('password')}
					error={errors.password}
				/>
				<button className={styles.buttonPrimary} type='submit'>
					Entrar
				</button>
			</form>
			<div className={styles.registerSubContainer}>
				<p className={styles.paragraph}>Ainda não possui uma conta?</p>
				<Link to='/register' className={styles.registerButtonContainer}>
					<button className={styles.buttonSecondary}>Cadastre-se</button>
				</Link>
			</div>
		</section>
	);
};
