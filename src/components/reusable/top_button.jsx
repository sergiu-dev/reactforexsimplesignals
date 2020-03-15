import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

class TopButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasScrolled: false
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollFunc);
	}

	// Function that shows the scroll-to-top button if user scrolls beyond a certain value of the window height
	scrollFunc = () => {
		// Get the current scroll value
		let y = window.scrollY;
		console.log(y);
		// If the scroll value is greater than the window height, will add the show class to the scroll-to-top button
		if (y > 300) {
			this.setState({hasScrolled : true});
		} else {
			this.setState({hasScrolled : false});
		}
	};

	scrollToTop = () => {
		// Variable for the number of pixels we are from the top of the document
		const top = document.documentElement.scrollTop || document.body.scrollTop;

		// If that number is greater than 0, scroll back to 0, or the top of the document
		// Animate that scroll with requestAnimationFrame:
		// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
		if (top > 0) {
			window.requestAnimationFrame(this.scrollToTop);
			// ScrollTo takes an x and a y coordinate.
			// Increase the '10' value to get a smoother/slower scroll!
			window.scrollTo(0, top - top / 10);
		}
	};

	render () {
		return (
			<button
				className={`${this.state.hasScrolled ? 'show' : 'hide'} button button-top js-button-top`}
				onClick={this.scrollToTop}
			>
				<FontAwesomeIcon icon={faChevronUp} />
			</button>
		)
	}
}

export default TopButton;
