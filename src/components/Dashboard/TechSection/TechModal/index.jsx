import { Input } from '../../../Forms/Input';
import { Select } from '../../../Forms/Select';
import styles from './style.module.scss';

export const TechModal = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Cadastrar tecnologia</h1>
        <div onClick={onClose} className={styles.closeBtnContainer}>
          <span>X</span>
        </div>
      </header>
      <main className={styles.main}>
        <form className={styles.formContainer}>
          <Input label='Nome' className={styles.input} />
          <Select label='Selecionar status' className={styles.input} />
          <button type='submit' className={styles.buttonPrimary}>
            Cadastrar Tecnologia
          </button>
        </form>
      </main>
    </div>
  );
};
