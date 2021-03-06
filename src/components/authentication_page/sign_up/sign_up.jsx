import React from 'react';

import FormInput from '../../form-input/form-input';
import Button from '../../button';
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';
import './sign_up.css';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName : '',
			email: '',
			password: '',
			confirmPassword: '',
			error: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);
			this.setState({
				displayName : '',
				email: '',
				password: '',
				confirmPassword: '',
				error: ''
			},() => createUserProfileDocument(user, {displayName}));
		} catch (error) {
			this.setState({ error })
		}
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({[name]: value});
	};

	render() {
		const { displayName, email, password, confirmPassword, error } = this.state;

		return (
			<div className='sign-up'>
				<h2 className='sign-up__title'>I do no have an account</h2>
				<span className='sign-up__title-span'>Sign up with your email and password</span>
				<form
					className='sign-up__form'
					onSubmit={this.handleSubmit}
				>
					{error && <p className='error'>{error.message}</p>}
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email address'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<Button type='submit'>
						Sign Up
					</Button>
				</form>
			</div>
		);
	}
}

export default SignUp;

