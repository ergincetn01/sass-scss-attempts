import React from "react"
import { InputProps } from "../../interfaces/Input/type"

export const NumberInput: React.FC<InputProps> = ({
	placeholder,
	value,
	onChange,
}) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		if (value.length <= 3 && Number(value) <= 200) {
			onChange(event)
		}
	}

	return (
		<input
			placeholder={placeholder}
			className="text-input"
			value={value}
			onChange={handleInputChange}
			max={200}
			min={0}
			maxLength={3}
		/>
	)
}
