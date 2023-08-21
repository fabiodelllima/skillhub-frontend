/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import styles from './style.module.scss';
import { forwardRef } from 'react';

export const Select = forwardRef(({ label, ...rest }, ref) => {
	return (
		<div className={styles.container}>
			<label htmlFor={rest.id}>{label}</label>
			<select ref={ref} {...rest}>
				<option value='firstModule'>Primeiro Módulo</option>
			</select>
		</div>
	);
});
