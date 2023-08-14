/* eslint-disable react/prop-types */
export const Select = ({ id, label, type, onChange, className, required }) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<select
				name={id}
				id={id}
				value={type}
				onChange={onChange}
				className={className}
				required={required}
			>
				<option value='firstModule'>Primeiro Módulo</option>
			</select>
		</>
	);
};
