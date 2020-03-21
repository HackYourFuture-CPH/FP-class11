import React from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

function InputText({ text, placeholder, handleChange }) {
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

export default InputText;
InputText.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
