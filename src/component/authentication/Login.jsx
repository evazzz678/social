import React, { useState } from 'react'
import "./Login.css"
import logo from "./../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';





function Authen() {


	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [state,setState] = useState('')





	let navigate = useNavigate()
	const handleLogin = () => {


		axios.post('http://localhost:3000/user/login', {}).then((result) => {

			console.log(result);
			
            setState({ message: result.data.message })

            console.log(result.data.token);

            localStorage.setItem('token', result.data.token)


			navigate('/home')

		}).catch(() => {
			console.log(error);
			setError('invalid username or password')
		})






	};


	return (
		<div className='forms'>
			<div className="form-container">
				<img src={logo} alt="Logo" className='image' />
				<p className="title">Login</p>
				<form className="form">
					<div className="input-group">
						<label htmlFor="username">Username</label>

						<input type="text" name="username" id="username" placeholder="username" value={username}
							onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" placeholder="password" value={password}
							onChange={(e) => setPassword(e.target.value)} />

					</div><br />
					<button type='button' className="sign" onClick={handleLogin}
						disabled={!username || !password}>Log in </button>
				</form>


				<p className="signup">Don't have an account?
					<Link to="/SignUp">Sign up</Link>
				</p>
			</div>





		</div>
	)
}

export default Authen