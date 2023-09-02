import { useContext } from 'react';
import styles from './style.module.scss';
import { UserContext } from '../../../providers/UserContext';

export const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.helloUser}>Olá, {user?.name}</h1>
        <p className={styles.userModule}>
          {user?.course_module}
        </p>
      </div>
    </header>
  );
};
