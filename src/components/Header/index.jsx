import styles from './style.module.scss';
import '../../styles/index.scss';
import Logo from '../../assets/Logo.svg';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.imgContainer}>
					<img src={Logo} alt='Logo' />
				</div>
			</div>
		</header>
	);
};
