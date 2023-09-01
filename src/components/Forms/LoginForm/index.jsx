import styles from './style.module.scss';
import { Input } from '../Input';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from './loginFormSchema';
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    userLogin(formData, setLoading, reset);
  };

  return (
    <section className={styles.loginContainer}>
      <form
        onSubmit={handleSubmit(submit)}
        className={styles.formContainer}
      >
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
        <button
          className={styles.buttonPrimary}
          type='submit'
          disabled={loading}
        >
          {loading ? 'Acessando...' : 'Entrar'}
        </button>
      </form>
      <div className={styles.registerSubContainer}>
        <p className={styles.paragraph}>
          Ainda não possui uma conta?
        </p>
        <Link
          to='/register'
          className={styles.registerButtonContainer}
        >
          <button className={styles.buttonSecondary}>
            Cadastre-se
          </button>
        </Link>
      </div>
    </section>
  );
};
