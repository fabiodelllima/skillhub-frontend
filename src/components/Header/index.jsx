/* eslint-disable react/prop-types */
import '../../styles/index.scss';
import styles from './style.module.scss';
import Logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

export const Header = ({ buttonText }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.imgContainer}>
					<img src={Logo} alt='Logo' />
				</div>
				<Link to='/'>
					<button className={styles.buttonHeader}>{buttonText}</button>
				</Link>
			</div>
		</header>
	);
};
