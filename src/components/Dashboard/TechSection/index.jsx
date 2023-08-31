import { TechCard } from './TechCard';
import styles from './style.module.scss';

export const TechSection = () => {
	return (
		<section className={styles.container}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Tecnologias</h1>
				<div className={styles.addTechBtnContainer}>
					<span className={styles.title}>+</span>
				</div>
			</div>
			<div className={styles.cardListContainer}>
				<ul className={styles.cardList}>
					<li>
						<TechCard />
					</li>
					<li>
						<TechCard />
					</li>
					<li>
						<TechCard />
					</li>
				</ul>
			</div>
		</section>
	);
};
