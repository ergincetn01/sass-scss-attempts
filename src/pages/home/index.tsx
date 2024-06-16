import React, { useEffect, useState } from "react"
import "./styles.scss"
import { TextInput } from "../../components/TextInput"
import { NumberInput } from "../../components/NumberInput"

export default function Home() {
	const [name, setName] = useState<string>("")
	const [age, setAge] = useState<string>("")

	useEffect(() => {
		console.log("name", name, "age", age)
	}, [name, age])

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAge(e.target.value)
	}

	return (
		<div className="App">
			<div className="inner">
				<form>
					<TextInput
						placeholder="Name"
						onChange={handleName}
						value={name}
					/>
					<NumberInput
						placeholder="Age"
						value={age}
						onChange={handleAge}
					/>
				</form>
			</div>
		</div>
	)
}
