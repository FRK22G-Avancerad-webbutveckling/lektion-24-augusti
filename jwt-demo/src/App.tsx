import { useState } from 'react'
import './App.css'

function App() {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	
interface ApiResponse {
	success: boolean;
	message?: string;
}

	const handleCreateUser = async () => {
		// 1. samla ihop användarnamn och lösenord
		// 2. förbereda request
		// 3. skicka request och vänta på svar
		// 4. oavsett success eller failure: visa status för användaren
		const url = 'https://jv4lxh2izk.execute-api.eu-north-1.amazonaws.com/auth/signup'
		const settings = {
			method: 'POST',
			body: JSON.stringify({
				username: username,
				password: password
			})
		}
		const response = await fetch(url, settings)
		const data: ApiResponse = await response.json()
		console.log('handleCreateUser: ', data);
		
		if( data.success ) {
			setMessage('Användaren skapades.')
		} else {
			setMessage('Kunde inte skapa användare.')
		}
	}
	return (
		<div className="app">
			<header>
				<h1> JWT demo </h1>
			</header>
			<main>
				<section className="framed column">
					<h2> Hantera användare </h2>
					<input type="text" placeholder="Användarnamn" value={username} onChange={event => setUsername(event.target.value)} />
					<input type="text" placeholder="Lösenord" value={password} onChange={event => setPassword(event.target.value)} />
					<div className="row">
						<button onClick={handleCreateUser}> Skapa användare </button>
						<button> Logga in </button>
					</div>
					<p> {message} </p>
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
