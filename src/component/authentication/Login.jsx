import React, { useState } from 'react'
import "./Login.css"
import logo from "./../../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';





function Authen() {


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [state, setState] = useState('')





	let navigate = useNavigate()
	const handleLogin = () => {

		console.log({ email, password });



		axios.post('http://localhost:3000/user/login', { email, password }).then((result) => {





			console.log('token', result.data.token);


			if (result.data.loginStatus) {
				localStorage.setItem('token', result.data.token)
				navigate('/home')
			}

			setState(result.data.message)

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
				<p className='status'>{state}</p>
				<form className="form">
					<div className="input-group">
						<label htmlFor="email">Email</label>

						<input type="text" name="email" id="email" placeholder="email" value={email}
							onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" placeholder="password" value={password}
							onChange={(e) => setPassword(e.target.value)} />

					</div><br />
					<button type='button' className="sign" onClick={handleLogin}
						disabled={!email || !password}>Log in </button>
				</form>


				<p className="signup">Don't have an account?
					<Link to="/SignUp">Sign up</Link>
				</p>
			</div>





		</div>
	)
}

export default Authen