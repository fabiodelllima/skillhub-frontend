import styles from './style.module.scss';

export const ErrorPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Erro: 404</h1>
        <p className={styles.subTitle}>
          Não foi possível encontrar a página.
        </p>
      </div>
    </section>
  );
};
