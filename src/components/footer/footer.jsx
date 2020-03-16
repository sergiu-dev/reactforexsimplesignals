import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Footer = () => (
	<footer className='footer'>
		<div className='footer__container'>
			<div className='footer__item footer__item-about'>
				<h3 className='section-title'>A piece of advice</h3>
				<p className='footer__item-text'>
          <span>
              "Life is really simple, but we insist on making it complicated."<br/>
          </span>
					- Confucius
				</p>
				<div className='footer__item-link'>
					<Link to='/about'>More about us</Link>
				</div>
				<hr className='d-block d-md-none'/>
			</div>
			<div className='footer__item footer__item-contact'>
				<h3 className='section-title'>Get in touch</h3>
				<div className='footer__item-link'>
					<a href='mailto:contact@forexsimplesignals.com?Subject=Hello' target='_top' title='Send us an email'>
						<FontAwesomeIcon icon={faEnvelope} />
						<span>contact@forexsimplesignals.com</span>
					</a>
				</div>
				<div className='footer__item-social-icons'>
					<Link to='#' className='footer__item-link-social'>
						<FontAwesomeIcon icon={faLinkedin} />
					</Link>
					<Link to='#' className='footer__item-link-social'>
						<FontAwesomeIcon icon={faFacebookSquare} />
					</Link>
					<Link to='#' className='footer__item-link-social'>
						<FontAwesomeIcon icon={faTwitterSquare} />
					</Link>
					<Link to='#' className='footer__item-link-social'>
						<FontAwesomeIcon icon={faYoutubeSquare} />
					</Link>
				</div>
				<hr className="d-block d-md-none"/>
			</div>
			<div className='footer__item footer__item-newsletter'>
				<h3 className='section-title'>Free updates</h3>
				<p className='footer__item-text'>
					Please subscribe to receive updates or important announcements.
					We promise that we won't spam you.
				</p>
				<form className='footer__item-form' action='' method='POST'>
					<input className='footer__item-form-input' type='email' name='email' placeholder='Email address' />
					<button className='button' type='submit'>Subscribe</button>
				</form>
			</div>
		</div>
		<div className='copyright'>
			<div className='copyright__text'>
				<p>Copyright &copy; {(new Date().getFullYear())} Forex Simple Signals</p>
			</div>
			<div className='copyright__icons'>
				<p>Flag icons made by
					<a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
					from
					<a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
				</p>
			</div>
		</div>
	</footer>
);

export default Footer;