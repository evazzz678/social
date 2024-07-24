import React from 'react'
import "./Authen.css"
import "./SignUp.css"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <div className="form-container">
	<p className="title">Sign Up</p>
	<form className="form">
		<div className="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder=""/>
		</div>
		<div className="input-group">
			<label for="email">Email id</label>
			<input type="email" name="email" id="email" placeholder=""/>
		</div>
		<button>verify</button><br />
		<form id="otp-form">
		<input type="text" className="otp-input" maxlength="1"/>
        <input type="text" className="otp-input" maxlength="1"/>
        <input type="text" className="otp-input" maxlength="1"/>
        <input type="text" className="otp-input" maxlength="1"/>
		</form>
		<div className="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder=""/>
			
		</div>
		<div className="input-group">
			<label for="password">Confirm Password</label>
			<input type="password" name="password" id="password" placeholder=""/>
		</div>
		<br />
		<button className="sign"><Link to = "/"> Sign up</Link></button>
	</form>
	
	
	
</div>
    </div>
  )
}

export default SignUp