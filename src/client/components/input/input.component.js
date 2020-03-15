import React from 'react';
import './input.style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Input({ type, placeholder, onChange, disabled }) {
  const className = classNames({ disabled });
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      disabled={disabled}
    />
  );
}

Input.defaultProps = {
  disabled: false,
  onChange: false,
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
