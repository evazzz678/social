import React from 'react'
import "./Authen.css"
import logo from "./../assets/logo.jpg"
import { Link } from 'react-router-dom'
import Chat from '../messages/Chat'





function Authen() {
	return (
		<div>
			<div className="form-container">
				<img src={logo} alt="Logo" className='image' />
				<p className="title">Login</p>
				<form className="form">
					<div className="input-group">
						<label htmlFor="username">Username</label>

						<input type="text" name="username" id="username" placeholder="" />
					</div>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" placeholder="" />
						<div className="forgot">
							<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
						</div>
					</div>
					<button className="sign"><Link to="/home">Log in</Link> </button>
				</form>


				<p className="signup">Don't have an account?
					<a rel="noopener noreferrer" href="#" className=""><Link to="/SignUp">Sign up</Link> </a>
				</p>
			</div>


			<Chat />


		</div>
	)
}

export default Authen