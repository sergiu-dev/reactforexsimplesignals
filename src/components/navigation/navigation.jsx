import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'

import { ReactComponent as Logos } from '../../assets/images/logo2.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LogoArrow } from '../../assets/images/logo_arrow.svg';
import { ReactComponent as AllSignals } from '../../assets/images/signals.svg';
import { ReactComponent as About } from '../../assets/images/about.svg';
import { ReactComponent as Contact } from '../../assets/images/envelope.svg';
import { ReactComponent as Login } from '../../assets/images/login.svg';

const Navigation = () => (
	<nav className='navigation'>
		<ul className='navigation__menu'>
			<li className='navigation__item-logo'>
				<Logo className='navigation__logo' />
			</li>
			<li className='navigation__item-logo'>
				<Link className='navigation__link' to='/'>
					<LogoArrow className='navigation__link-icon' />
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/all-signals'>
					<AllSignals className='navigation__link-icon' />
					<span className='navigation__link-text'>All signals</span>
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/about'>
					<About className='navigation__link-icon' />
					<span className='navigation__link-text'>About</span>
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/contact'>
					<Contact className='navigation__link-icon' />
					<span className='navigation__link-text'>Contact</span>
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/authentication'>
					<Login className='navigation__link-icon' />
					<span className='navigation__link-text'>Sign in</span>
				</Link>
			</li>
		</ul>
	</nav>
);

export default Navigation;