import React, { useEffect, useState } from "react"
import "./styles.scss"

export default function Home() {
	const [name, setName] = useState<string>()

	useEffect(() => {
		console.log("name", name)
	}, [name])

	const handleName = (e: any) => {
		setName(e.target.value)
	}

	return (
		<div className="App">
			<div className="inner">
				<form>
					<input
						placeholder="isim"
						className="name-input"
						value={name}
						onChange={handleName}
					/>
					<input
						placeholder="isim"
						className="name-input"
						value={name}
						onChange={handleName}
					/>
					<input
						placeholder="isim"
						className="name-input"
						value={name}
						onChange={handleName}
					/>
					<input
						placeholder="isim"
						className="name-input"
						value={name}
						onChange={handleName}
					/>
					<input
						placeholder="isim"
						className="name-input"
						value={name}
						onChange={handleName}
					/>
					<input
						placeholder="isim"
						className="name-input"
						value={name}
						onChange={handleName}
					/>
				</form>
			</div>
		</div>
	)
}
