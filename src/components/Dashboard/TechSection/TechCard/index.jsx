import styles from './style.module.scss';
import EditIcon from '../../../../assets/EditIcon.svg';
import DeleteIcon from '../../../../assets/DeleteIcon.svg';
import { useContext } from 'react';
import { TechContext } from '../../../../providers/TechContext';

export const TechCard = ({ tech }) => {
  const { setEditTech, deleteTech } = useContext(TechContext);

  return (
    <li className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{tech.title}</p>
      </div>
      <div className={styles.detailsContainer}>
        <p className={styles.status}>{tech.status}</p>
        <div className={styles.iconsContainer}>
          <button
            className={styles.editButton}
            title='Editar tecnologia'
            aria-label='edit'
            onClick={() => setEditTech(tech)}
          >
            <img
              src={EditIcon}
              alt='Editar tecnologia'
              className={styles.icon}
            />
          </button>
          <button
            className={styles.deleteButton}
            title='Excluir tecnologia'
            aria-label='delete'
            onClick={() => deleteTech(tech.id)}
          >
            <img
              src={DeleteIcon}
              alt='Excluir tecnologia'
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </li>
  );
};
