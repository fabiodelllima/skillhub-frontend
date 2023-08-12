/* eslint-disable react/prop-types */
export const Input = ({
	id,
	label,
	inputType,
	inputValue,
	setValue,
	placeholder,
	className,
	required,
}) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input
				type={inputType}
				name={id}
				id={id}
				value={inputValue}
				onChange={(e) => setValue(e.target.inputValue)}
				placeholder={placeholder}
				className={className}
				required={required}
			/>
		</>
	);
};
