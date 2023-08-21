/* eslint-disable react/prop-types */
export const Select = ({ id, label, type, className, required, register }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<select
				name={id}
				id={id}
				value={type}
				className={className}
				required={required}
				{...register}
			>
				<option value='firstModule'>Primeiro Módulo</option>
			</select>
		</>
	);
};
