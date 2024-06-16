import React from "react"

export interface InputProps {
	value: string | number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder: string
}
