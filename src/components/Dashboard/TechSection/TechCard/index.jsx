import styles from './style.module.scss';
import { MdEdit, MdDelete } from 'react-icons/md';
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
        <p>{tech.status}</p>
        <button
          onClick={() => setEditTech(tech)}
          title='Editar tecnologia'
          aria-label='edit'
        >
          <MdEdit />
        </button>
        <button
          onClick={() => deleteTech(tech.id)}
          title='Excluir tecnologia'
          aria-label='delete'
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};
