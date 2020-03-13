import React from 'react';
import './button.style.css';
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
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    'save',
    'delete-crop',
    'export',
    'cancel',
    'delete',
    'logout',
    'toggle',
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  toggled: PropTypes.bool,
};
