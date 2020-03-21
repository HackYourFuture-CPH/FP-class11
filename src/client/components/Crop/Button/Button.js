import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ submit, handleSubmit, placeholder }) => {
  return (
    <button className="Button-class" type={submit} onClick={handleSubmit}>
      {placeholder}
    </button>
  );
};

export default Button;
Button.propTypes = {
  submit: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
