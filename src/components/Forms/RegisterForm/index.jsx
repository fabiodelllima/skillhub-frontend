import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Select } from '../Select';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerFormSchema } from './registerFormSchema';

export const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerFormSchema),
	});

	const submit = (formData) => {
		console.log(formData);
		console.table(formData);
		console.log(errors);
	};

	return (
		<section className={styles.loginContainer}>
			<form onSubmit={handleSubmit(submit)} className={styles.formContainer}>
				<h1 className={styles.title}>Crie sua conta</h1>
				{/* <p>Rápido e grátis, vamos nessa</p> */}
				<Input
					label='Nome'
					type='text'
					name='name'
					id='name'
					className={styles.input}
					{...register('name')}
					error={errors.name}
				/>
				<Input
					label='Email'
					type='email'
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
				<Input
					label='Confirmar Senha'
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					className={styles.input}
					{...register('confirmPassword')}
					error={errors.confirmPassword}
				/>
				<Input
					label='Bio'
					type='text'
					name='bio'
					id='bio'
					className={styles.input}
					{...register('bio')}
					error={errors.bio}
				/>
				<Input
					label='Contato'
					type='text'
					name='contact'
					id='contact'
					className={styles.input}
					{...register('contact')}
					error={errors.contact}
				/>
				<Select
					label='Selecionar módulo'
					name='course_module'
					id='course_module'
					className={styles.select}
					{...register('course_module')}
					error={errors.course_module}
				/>
				<button className={styles.buttonPrimaryNegative} type='submit'>
					Cadastrar
				</button>
			</form>
		</section>
	);
};
