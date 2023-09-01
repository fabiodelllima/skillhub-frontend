import { useForm } from 'react-hook-form';
import { Input } from '../../../Forms/Input';
import { Select } from '../../../Forms/Select';
import styles from './style.module.scss';
import { useContext } from 'react';
import { TechContext } from '../../../../providers/TechContext';
import { Navigate } from 'react-router-dom';

export const EditTechModal = () => {
  const { updateTech, editTech, setEditTech } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm({
    values: {
      status: editTech.status,
    },
  });

  const submit = (formData) => {
    updateTech(formData);
  };

  return editTech ? (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Editar tecnologia</h1>
        <div
          onClick={() => setEditTech(null)}
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
            value={editTech.title}
            readOnly={true}
            disabled={true}
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
            Editar Tecnologia
          </button>
        </form>
      </main>
    </div>
  ) : (
    <Navigate to={'/user'} />
  );
};
