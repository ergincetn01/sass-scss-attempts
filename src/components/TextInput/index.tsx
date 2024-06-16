import React from "react"
import { InputProps } from "../../interfaces/Input/type"
import "./styles.scss"

export const TextInput: React.FC<InputProps> = ({
	placeholder,
	value,
	onChange,
}) => {
	return (
		<input
			placeholder={placeholder}
			className="text-input"
			value={value}
			onChange={onChange}
		/>
	)
}
