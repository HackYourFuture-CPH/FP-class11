import React from 'react';
import './Input.style.css';
import PropTypes from 'prop-types';

export default function Input({type, placeholder, onChange}) {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}