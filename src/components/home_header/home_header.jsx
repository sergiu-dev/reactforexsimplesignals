import React from 'react';
import { Link } from 'react-router-dom';
import './home_header.css'

const HomeHeader = () => (
	<div className='home-header'>
		<div className='home-header__container fade-in-left'>
			<h1 className='home-header__title'>Free Forex Signals</h1>
			<p className='home-header__text'>Forex Simple Signals is a free forex signals service.
				<br /> Here you will find signals which are based on fundamental, sentiment and technical analisys.
				<br /> You won't find anything about learning because the internet is full of it.
			</p>
			<Link className='button' to='about'>Read more</Link>
		</div>
	</div>
);

export default HomeHeader;