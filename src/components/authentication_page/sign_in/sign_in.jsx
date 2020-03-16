import React from 'react';
import FormInput from '../../form-input/form-input';
import {ReactComponent as Google } from '../../../assets/images/google.svg';
import Button from '../../button';
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils';
import './sign_in.css';

class SignIn extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			error: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: '', error: ''})
		} catch (error) {
			this.setState({ error });
		}
	};

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({[name]: value})
	};

	render() {
		const { error } = this.state;
		return (
			<div className='sign-in'>
				<h2 className='sign-in__title'>I already have an account</h2>
				<span className='sign-in__title-span'>Sign in with your email and password</span>
				<form
					className='sign-in__form'
					onSubmit={this.handleSubmit}
				>
					{error && <p className='error'>{error.message}</p>}
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