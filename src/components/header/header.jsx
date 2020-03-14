import React from 'react';
import { Link } from 'react-router-dom';
import TradesWidget from '../trades_widget';
import './header.css';

import logo from '../../assets/images/logo.png';

const Header = () => (
	<div className='header'>
		<Link className='header__link' to='/'>
			<img src={logo} className='header__logo'  alt='logo'/>
		</Link>
		<TradesWidget />
	</div>
);

export default Header;