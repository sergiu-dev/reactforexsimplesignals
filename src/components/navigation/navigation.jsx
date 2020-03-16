import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faHome, faChartBar, faUserTie, faEnvelope, faSignInAlt,faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './navigation.css'

import { auth } from '../../firebase/firebase.utils';

const Navigation = ({currentUser}) => (
	<nav className='navigation'>
		<ul className='navigation__menu'>
			<li className='navigation__arrow'>
				<div className='navigation__arrow-container'>
					<FontAwesomeIcon icon={faAngleDoubleRight} className='navigation__arrow-icon' />
				</div>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/'>
					<FontAwesomeIcon icon={faHome} className='navigation__link-icon' />
					<span className='navigation__link-text'>Home</span>
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/all-signals'>
					<FontAwesomeIcon icon={faChartBar} className='navigation__link-icon' />
					<span className='navigation__link-text'>All signals</span>
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/about'>
					<FontAwesomeIcon icon={faUserTie} className='navigation__link-icon' />
					<span className='navigation__link-text'>About</span>
				</Link>
			</li>
			<li className='navigation__item'>
				<Link className='navigation__link' to='/contact'>
					<FontAwesomeIcon icon={faEnvelope} className='navigation__link-icon' />
					<span className='navigation__link-text'>Contact</span>
				</Link>
			</li>
			<li className='navigation__item'>
				{
					currentUser ?
						<div className='navigation__link navigation__link-signout' onClick={() => auth.signOut()}>
							<FontAwesomeIcon icon={faPowerOff} className='navigation__link-icon' />
							<span className='navigation__link-text'>Sign out</span>
						</div>
						:
						<Link className='navigation__link' to='/sign-in'>
							<FontAwesomeIcon icon={faSignInAlt} className='navigation__link-icon' />
							<span className='navigation__link-text'>Sign in</span>
						</Link>
				}
			</li>
		</ul>
	</nav>
);

export default Navigation;