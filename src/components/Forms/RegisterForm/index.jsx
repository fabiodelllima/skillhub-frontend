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
					required={true}
					register={register('name')}
					error={errors.name}
				/>
				{errors.name?.message}
				<Input
					label='Email'
					type='email'
					name='email'
					id='email'
					className={styles.input}
					required={true}
					register={register('email')}
					error={errors.email}
				/>
				{errors.email?.message}
				<Input
					label='Senha'
					type='password'
					name='password'
					id='password'
					className={styles.input}
					required={true}
					register={register('password')}
					error={errors.password}
				/>
				{errors.password?.message}
				<Input
					label='Confirmar Senha'
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					className={styles.input}
					required={true}
					register={register('confirmPassword')}
					error={errors.confirmPassword}
				/>
				{errors.confirmPassword?.message}
				<Input
					label='Bio'
					type='text'
					name='bio'
					id='bio'
					className={styles.input}
					required={true}
					register={register('bio')}
					error={errors.bio}
				/>
				{errors.bio?.message}
				<Input
					label='Contato'
					type='text'
					name='contact'
					id='contact'
					className={styles.input}
					required={true}
					register={register('contact')}
					error={errors.contact}
				/>
				{errors.contact?.message}
				<Select
					label='Selecionar módulo'
					name='courseModule'
					id='courseModule'
					className={styles.select}
					required={true}
					register={register('courseModule')}
					error={errors.courseModule}
				/>
				{errors.courseModule?.message}
				<button className={styles.buttonPrimaryNegative} type='submit'>
					Cadastrar
				</button>
			</form>
		</section>
	);
};
