import React from 'react';
import FormInput from '../form-input/form-input';
import './sign_in.css';
import Button from '../button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = e => {
		e.preventDefault();

		this.setState({email: '', password: ''})
	};

	handleChange = e => {
		const { value, name } = e.target;
		this.setState({[name]: value})
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and passowrd</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<Button type='submit'>Sign in</Button>
					<Button onClick={signInWithGoogle}>Sign in with Google</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;