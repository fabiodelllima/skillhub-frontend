import styles from './style.module.scss';
import { MdEdit, MdDelete } from 'react-icons/md';

export const TechCard = () => {
  return (
    <li className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>React</p>
      </div>
      <div className={styles.detailsContainer}>
        <p>Avançado</p>
        <button title='Editar tecnologia' aria-label='edit'>
          <MdEdit />
        </button>
        <button title='Excluir tecnologia' aria-label='delete'>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
