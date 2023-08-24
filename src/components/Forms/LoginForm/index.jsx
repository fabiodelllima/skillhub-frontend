/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from './style.module.scss';
import { Input } from '../Input';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './loginFormSchema';
import { useState } from 'react';
import { api } from '../../../services/api';

export const LoginForm = ({ setUser }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginFormSchema),
	});

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const userLogin = async (formData) => {
		try {
			setLoading(true);
			const { data } = await api.post('/sessions', formData);
			console.table(data);
			setUser(data.user);
			localStorage.setItem('@TOKEN', data.token);
			navigate('/user');
		} catch (error) {
			console.log(error);
			if (error.response?.message === 'Incorrect password') {
				alert('O email e senha não correspondem');
			}
		} finally {
			setLoading(false);
		}
	};

	const submit = (formData) => {
		console.table(formData);
		userLogin(formData);
	};

	return (
		<section className={styles.loginContainer}>
			<form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
				<h1 className={styles.title}>Login</h1>
				<Input
					label='E-mail'
					type='text'
					name='email'
					id='email'
					className={styles.input}
					{...register('email')}
					error={errors.email}
				/>
				<Input
					label='Senha'
					type='password'
					name='password'
					id='password'
					className={styles.input}
					{...register('password')}
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
