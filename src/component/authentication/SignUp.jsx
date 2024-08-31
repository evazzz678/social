import React from 'react'
import "./Login.css"
import "./SignUp.css"
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SignUp() {

	let [state, setState] = useState({
		message: ""
	})

	let [value, setValue] = useState({
		email: "",
		password: "",
	})
	function getvalue(event) {


		setValue(
			{
				...value,
				[event.target.name]: event.target.value
			})
	}

	function sentvalue() {
		axios.post("http://localhost:3000/user", value).then((result) => {
			console.log(result);
			setState({ message: result.data.message })

			console.log(result.data.token);

			localStorage.setItem('token', result.data.token)

		}).catch(() => {
			console.log(error);
		})
	}

	function emailExist(email) {async (email) => {
		try {
			await axios.get('/api/check-email', { params: { email } });
		return response.data.exists;
	  } catch (error) {
		console.error('Error checking email existence:', error);
		throw new Error('Failed to check email');
	  }
	}
}


//    function sentOtp(){

// 	axios.post("http://localhost:3000/user/sendotp", value).then((result) => {
// 		console.log(result);
// 		setState({ message: result.data.message })

// 		console.log(result.data.token);

// 		localStorage.setItem('token', result.data.token)

// 	}).catch(() => {
// 		console.log(error);
// 	})
//    }





	return (
		<div className='forms'>
			<div className="form-container">
				<p className="title">Sign Up</p>
				<form className="form">
					<div className="input-group">
						<label for="username">Username</label>
						<input type="text" name="username" id="username" placeholder="" onChange={getvalue} />
					</div>
					<div className="input-group">
						<label for="email">Email id</label>
						<input type="email" name="email" id="email" placeholder="" onChange={getvalue} />
					</div>
					


					{/* <button type='button' onClick={sentOtp}>verify</button><br />
					<form id="otp-form">
						<input type="text" className="otp-input" maxlength="1" />
						<input type="text" className="otp-input" maxlength="1" />
						<input type="text" className="otp-input" maxlength="1" />
						<input type="text" className="otp-input" maxlength="1" />
					</form> */}
					<div className="input-group">
						<label for="password">Password</label>
						<input type="password" name="password" id="password" placeholder="" onChange={getvalue} />

					</div>
					<div className="input-group">
						<label for="password">Confirm Password</label>
						<input type="password" name="password" id="password" placeholder="" onChange={getvalue} />
					</div>
					<br />
					<button className="sign"><Link to="/" onClick={sentvalue}> Sign up</Link></button>
				</form>



			</div>
		</div>
	)
}

export default SignUp