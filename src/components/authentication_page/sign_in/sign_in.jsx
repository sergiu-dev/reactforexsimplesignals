import React from 'react';
import FormInput from '../../form-input/form-input';
import {ReactComponent as Google } from '../../../assets/images/google.svg';
import Button from '../../button';
import { signInWithGoogle } from '../../../firebase/firebase.utils';
import './sign_in.css';

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
				<h2 className='sign-in__title'>I already have an account</h2>
				<span>Sign in with your email and passowrd</span>
				<form
					noValidate
					className='sign-in__form'
					onSubmit={this.handleSubmit}
				>
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
					<div className='sign-in__buttons'>
						<Button type='submit'>Sign in</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							<Google />
							Sign in with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;