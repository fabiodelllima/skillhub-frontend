import styles from './style.module.scss';

export const ErrorPage = () => {
  const primaryMsg = 'Erro: 404';
  const secondaryMsg = 'Não foi possível encontrar a página.';

  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>{primaryMsg}</h1>
        <p className={styles.subTitle}>{secondaryMsg}</p>
      </div>
    </section>
  );
};
