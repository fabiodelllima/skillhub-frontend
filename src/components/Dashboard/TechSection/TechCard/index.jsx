import styles from './style.module.scss';

export const TechCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<p className={styles.title}>React</p>
			</div>
			<div className={styles.detailsContainer}>
				<p>Avançado</p>
				<button>Editar</button>
				<button>Excluir</button>
			</div>
		</div>
	);
};
