import { useForm } from 'react-hook-form';
import { Input } from '../../../Forms/Input';
import { Select } from '../../../Forms/Select';
import styles from './style.module.scss';
import { useContext } from 'react';
import { TechContext } from '../../../../providers/TechContext';

export const CreateTechModal = ({ onClose }) => {
  const { register, handleSubmit } = useForm();
  const { createTech } = useContext(TechContext);

  const submit = (formData) => {
    createTech(formData);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Cadastrar tecnologia</h1>
        <div
          onClick={onClose}
          className={styles.closeBtnContainer}
        >
          <span>X</span>
        </div>
      </header>
      <main className={styles.main}>
        <form
          onSubmit={handleSubmit(submit)}
          className={styles.formContainer}
        >
          <Input
            label='Nome'
            className={styles.input}
            {...register('title')}
          />
          <Select
            label='Selecionar status'
            className={styles.input}
            {...register('status')}
          >
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediário'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
          </Select>
          <button type='submit' className={styles.buttonPrimary}>
            Cadastrar Tecnologia
          </button>
        </form>
      </main>
    </div>
  );
};
