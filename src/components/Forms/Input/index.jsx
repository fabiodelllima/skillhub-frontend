import styles from './style.module.scss';
import { forwardRef } from 'react';

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
	return (
		<div className={styles.container}>
			<label>{label}</label>
			<input ref={ref} {...rest} />
			{error ? <p className={styles.errorMessage}>{error.message}</p> : null}
		</div>
	);
});
