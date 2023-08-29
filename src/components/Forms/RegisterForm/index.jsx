import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Select } from '../Select';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from './registerFormSchema';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerFormSchema),
	});

	const [loading, setLoading] = useState(false);

	const { userRegister } = useContext(UserContext);

	const submit = (formData) => {
		userRegister(formData, setLoading);
	};

	return (
		<section className={styles.loginContainer}>
			<form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
				<h1 className={styles.title}>Crie sua conta</h1>
				<p className={styles.subTitle}>Rápido e grátis, vamos nessa</p>
				<Input
					label='Nome'
					placeholder='Digite aqui seu nome'
					type='text'
					name='name'
					id='name'
					className={styles.input}
					{...register('name')}
					error={errors.name}
					disabled={loading}
				/>
				<Input
					label='Email'
					placeholder='Digite aqui seu email'
					type='email'
					name='email'
					id='email'
					className={styles.input}
					{...register('email')}
					error={errors.email}
					disabled={loading}
				/>
				<Input
					label='Senha'
					placeholder='Digite aqui sua senha'
					type='password'
					name='password'
					id='password'
					className={styles.input}
					{...register('password')}
					error={errors.password}
					disabled={loading}
				/>
				<Input
					label='Confirmar Senha'
					placeholder='Digite novamente sua senha'
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					className={styles.input}
					{...register('confirmPassword')}
					error={errors.confirmPassword}
					disabled={loading}
				/>
				<Input
					label='Bio'
					placeholder='Fale sobre você'
					type='text'
					name='bio'
					id='bio'
					className={styles.input}
					{...register('bio')}
					error={errors.bio}
					disabled={loading}
				/>
				<Input
					label='Contato'
					placeholder='Opção de contato'
					type='text'
					name='contact'
					id='contact'
					className={styles.input}
					{...register('contact')}
					error={errors.contact}
					disabled={loading}
				/>
				<Select
					label='Selecionar módulo'
					name='course_module'
					id='course_module'
					className={styles.select}
					{...register('course_module')}
					error={errors.course_module}
					disabled={loading}
				>
					<option value='Primeiro módulo  (Introdução ao Frontend)'>
						Primeiro Módulo
					</option>
					<option value='Segundo módulo (Frontend Avançado)'>
						Segundo Módulo
					</option>
					<option value='Terceiro módulo (Introdução ao Backend)'>
						Terceiro Módulo
					</option>
					<option value='Quarto módulo (Backend Avançado)'>
						Quarto Módulo
					</option>
				</Select>
				<button
					className={styles.buttonPrimary}
					type='submit'
					disabled={loading}
				>
					{loading ? 'Cadastrando...' : 'Cadastrar'}
				</button>
			</form>
		</section>
	);
};
