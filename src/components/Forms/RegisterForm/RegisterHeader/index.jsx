import '../../../../styles/index.scss';
import styles from './style.module.scss';
import Logo from '../../../../assets/Logo.png';
import { Link } from 'react-router-dom';

export const RegisterHeader = ({ buttonText, userLogout }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.logo} src={Logo} alt='Logo' />
        </div>
        <Link to='/'>
          <button
            className={styles.buttonHeader}
            onClick={userLogout}
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </header>
  );
};
