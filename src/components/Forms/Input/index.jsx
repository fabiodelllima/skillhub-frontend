/* eslint-disable react/prop-types */
// import styles from './style.module.scss';

export const Input = ({
	id,
	label,
	type,
	className,
	required,
	register,
	error,
}) => {
	return (
		<>
			<label>{label}</label>
			<input
				type={type}
				name={id}
				id={id}
				className={className}
				required={required}
				{...register}
			/>
			{error ? <p>{error.message}</p> : null}
		</>
	);
};
