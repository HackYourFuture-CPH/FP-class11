import React from 'react';
import './Input.style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Input({ type, placeholder, onChange, disabled }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames({ disabled })}
    />
  );
}

Input.defaultProps = {
  disabled: false,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
