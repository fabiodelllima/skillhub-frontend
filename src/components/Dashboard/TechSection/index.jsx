import { useContext } from 'react';
import { TechCard } from './TechCard';
import styles from './style.module.scss';
import { CreateTechModal } from './CreateTechModal';
import { TechContext } from '../../../providers/TechContext';
import { EditTechModal } from './EditTechModal';

export const TechSection = () => {
  const { editTech, techList } = useContext(TechContext);
  const { isVisible, setIsVisible } = useContext(TechContext);

  const handleAddTechBtnClick = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Tecnologias</h1>
        <div
          onClick={handleAddTechBtnClick}
          className={styles.addTechBtnContainer}
        >
          <span className={styles.title}>+</span>
        </div>
      </div>
      <div className={styles.cardListContainer}>
        <ul className={styles.cardList}>
          {techList.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
          ))}
        </ul>
      </div>

      {isVisible ? (
        <CreateTechModal onClose={handleCloseModal} />
      ) : null}

      {editTech ? <EditTechModal /> : null}
    </section>
  );
};
