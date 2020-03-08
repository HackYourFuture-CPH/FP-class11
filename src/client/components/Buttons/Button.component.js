import React from 'react';
import './Button.style.css';
import PropTypes from 'prop-types';

/* Button variants: save, delete-crop, export, logout, delete, cancel, toggle */
export default function Button({ children, variant, onClick, toggled }) {
  return (
    <input
      className={`btn btn--${variant}${
        variant === 'toggle' && toggled ? ' toggled' : ''
      }`}
      type="submit"
      onClick={onClick}
      value={children}
    />
  );
}

Button.defaultProps = {
  toggled: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
};
