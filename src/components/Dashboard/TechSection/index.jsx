import { useState } from 'react';
import { TechCard } from './TechCard';
import styles from './style.module.scss';
import { TechModal } from './TechModal';

export const TechSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          <TechCard />
          <TechCard />
          <TechCard />
        </ul>
      </div>

      {isVisible ? <TechModal onClose={handleCloseModal} /> : null}
    </section>
  );
};
