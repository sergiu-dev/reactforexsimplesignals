import React from 'react';

const Button = ({children, isGoogleSignIn, ...otherProps}) => (
	<button
		className={`${isGoogleSignIn ? 'button-google' : ''} button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default Button;