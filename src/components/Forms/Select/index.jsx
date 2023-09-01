import styles from './style.module.scss';
import { forwardRef } from 'react';

export const Select = forwardRef(
  ({ children, label, ...rest }, ref) => {
    return (
      <div className={styles.container}>
        <label htmlFor={rest.id}>{label}</label>
        <select ref={ref} {...rest}>
          {children}
        </select>
      </div>
    );
  }
);
