import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const TopButton = () => (
	<button className='button button-top js-button-top hide'>
		<FontAwesomeIcon icon={faChevronUp} />
	</button>
);

window.addEventListener('load', () => {

	/* ** Back to top button ** */

	// Set a variable for our button element.
	const scrollToTopButton = document.querySelector('.js-button-top');

	// Function that shows the scroll-to-top button if user scrolls beyond a certain value of the window height
	const scrollFunc = () => {
		// Get the current scroll value
		let y = window.scrollY;

		// If the scroll value is greater than the window height, will add the show class to the scroll-to-top button
		if (y > 300) {
			scrollToTopButton.className = 'button button-top js-button-top show';
		} else {
			scrollToTopButton.className = 'button button-top js-button-top hide';
		}
	};

	window.addEventListener('scroll', scrollFunc);

	const scrollToTop = () => {
		// Variable for the number of pixels we are from the top of the document
		const top = document.documentElement.scrollTop || document.body.scrollTop;

		// If that number is greater than 0, scroll back to 0, or the top of the document
		// Animate that scroll with requestAnimationFrame:
		// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
		if (top > 0) {
			window.requestAnimationFrame(scrollToTop);
			// ScrollTo takes an x and a y coordinate.
			// Increase the '10' value to get a smoother/slower scroll!
			window.scrollTo(0, top - top / 10);
		}
	};

	// When the button is clicked, run ScrolltoTop function
	scrollToTopButton.onclick = (e) => {
		e.preventDefault();
		scrollToTop();
	};
});

export default TopButton;
