/* eslint-disable react/prop-types */
export const Input = ({ id, label, type, className, required, register }) => {
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
		</>
	);
};
