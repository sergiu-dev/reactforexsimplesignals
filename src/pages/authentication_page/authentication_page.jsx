import React from 'react';
import SignIn from '../../components/authentication_page/sign_in/sign_in';
import SignUp from '../../components/authentication_page/sign_up/sign_up';
import './authentication_page.css';

const AuthentictionPage = () => (
	<div className='authentication-page container'>
		<SignIn />
		<SignUp />
	</div>
);

export default AuthentictionPage;