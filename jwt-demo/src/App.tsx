import { useState } from 'react'
import './App.css'

function App() {
	return (
		<div className="app">
			<header>
				<h1> JWT demo </h1>
			</header>
			<main>
				<section className="framed column">
					<h2> Hantera användare </h2>
					<input type="text" placeholder="Användarnamn" />
					<input type="text" placeholder="Lösenord" />
					<div className="row">
						<button> Skapa användare </button>
						<button> Logga in </button>
					</div>
				</section>

				<section className="framed">
					<h2> När inloggad </h2>
					<button> Hämta användarinfo </button>

				</section>
			</main>
		</div>
	)
}

export default App
