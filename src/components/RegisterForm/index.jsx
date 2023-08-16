import styles from './style.module.scss';
import { useForm } from 'react-hook-form';
import { Input } from '../Form/Input';
import { Select } from '../Form/Select';

export const RegisterForm = () => {
	const { register, handleSubmit } = useForm();

	const submit = (formData) => {
		console.log(formData);
		console.table(formData);
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
				/>
				<Input
					label='Email'
					type='email'
					name='email'
					id='email'
					className={styles.input}
					required={true}
					register={register('email')}
				/>
				<Input
					label='Senha'
					type='password'
					name='password'
					id='password'
					className={styles.input}
					required={true}
					register={register('password')}
				/>
				<Input
					label='Confirmar Senha'
					type='password'
					name='confirmPassword'
					id='confirmPassword'
					className={styles.input}
					required={true}
					register={register('confirmPassword')}
				/>
				<Input
					label='Bio'
					type='text'
					name='bio'
					id='bio'
					className={styles.input}
					required={true}
					register={register('bio')}
				/>
				<Input
					label='Contato'
					type='text'
					name='contact'
					id='contact'
					className={styles.input}
					required={true}
					register={register('contact')}
				/>
				<Select
					label='Selecionar módulo'
					name='courseModule'
					id='courseModule'
					className={styles.select}
					required={true}
					register={register('courseModule')}
				/>
				<button className={styles.buttonPrimaryNegative} type='submit'>
					Cadastrar
				</button>
			</form>
		</section>
	);
};
