import styles from './style.module.scss';
import { MdEdit, MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../../../providers/UserContext';
import { TechContext } from '../../../../providers/TechContext';

export const TechCard = () => {
  const { user } = useContext(UserContext);
  const { setEditTech, deleteTech } = useContext(TechContext);

  return (
    <li className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>React</p>
        <p className={styles.title}>{user.title}</p>
      </div>
      <div className={styles.detailsContainer}>
        <p>Avançado</p>
        <p>{user.status}</p>
        <button
          onClick={() => setEditTech(tech)}
          title='Editar tecnologia'
          aria-label='edit'
        >
          <MdEdit />
        </button>
        <button
          onClick={() => deleteTech(deletingId)}
          title='Excluir tecnologia'
          aria-label='delete'
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
