import styles from './style.module.scss';
import LoadingIcon from '../../assets/Loading.svg';

export const Loading = () => {
  return (
    <section className={styles.container}>
      <img src={LoadingIcon} alt='Carregando...' />
    </section>
  );
};
