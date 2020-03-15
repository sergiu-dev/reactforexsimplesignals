import React from 'react';
import './form-input.css';

const FormInput = ({handleChange, label, ...otherProps}) => (
	<div className='form__group'>
		<input className='form__group-input' onChange={handleChange} {...otherProps } />
		{
			label ? (
					<label className={`${otherProps.value.length ? 'shrink' : ''} form__group-label`}>
						{label}
					</label>
				)
			: null
		}
	</div>
);

export default FormInput;