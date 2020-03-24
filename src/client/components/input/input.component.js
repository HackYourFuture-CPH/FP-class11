import React from 'react';
import './input.style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Input({ name, type, placeholder, onChange, disabled }) {
  const className = classNames({ disabled });
  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{placeholder}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        disabled={disabled}
      />
    </div>
  );
}

Input.defaultProps = {
  disabled: false,
  onChange: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
