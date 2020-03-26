import React from 'react';
import PropTypes from 'prop-types';
import './form-button.css';

const Button = ({ handleSubmit, placeholder }) => {
  return (
    <button className="btn" type="submit" onClick={handleSubmit}>
      {placeholder}
    </button>
  );
};
export default Button;
Button.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
