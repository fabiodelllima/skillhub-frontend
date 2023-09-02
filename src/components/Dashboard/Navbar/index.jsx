import '../../../styles/index.scss';
import styles from './style.module.scss';
import Logo from '../../../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../providers/UserContext';

export const Navbar = ({ buttonText }) => {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={Logo} alt='Logo' />
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
    </nav>
  );
};
