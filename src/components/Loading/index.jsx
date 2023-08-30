import styles from './style.module.scss';
import LoadingIcon from '../../assets/Loading.svg';

export const Loading = () => {
	return (
		<div className={styles.container}>
			<img src={LoadingIcon} alt='Carregando...' />
		</div>
	);
};
