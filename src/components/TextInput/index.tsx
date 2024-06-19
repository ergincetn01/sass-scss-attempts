import React from "react"
import { InputProps } from "../../interfaces/Input/type"
import "./styles.sass"

export const TextInput: React.FC<InputProps> = ({
	placeholder,
	value,
	onChange,
	maxLength,
}) => {
	return (
		<input
			placeholder={placeholder}
			className="text-input"
			maxLength={maxLength}
			value={value}
			spellCheck="false"
			autoCapitalize="sentences"
			onChange={onChange}
		/>
	)
}
