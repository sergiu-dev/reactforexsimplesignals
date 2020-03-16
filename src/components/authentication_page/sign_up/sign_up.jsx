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
			confirmPassword: ''
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
			await createUserProfileDocument(user, {displayName});
			this.setState({
				displayName : '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({[name]: value});
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='sign-up__title'>I do no have an account</h2>
				<span>Sing up with your email and password</span>
				<form
					noValidate
					className='sign-up__form'
					onSubmit={this.handleSubmit}
				>
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

