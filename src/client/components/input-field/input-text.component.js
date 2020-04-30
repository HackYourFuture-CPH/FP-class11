import React from 'react';
import PropTypes from 'prop-types';
import './input-text.css';

export default function InputText({ text, placeholder, handleChange }) {
  return (
    <div>
      <input
        className="input-text"
        type={text}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
InputText.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
