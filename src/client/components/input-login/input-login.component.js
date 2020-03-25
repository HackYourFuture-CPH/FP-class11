import React from 'react';
import '../input/input.style.css';
import './input-login.style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InputLogin({
  name,
  type,
  placeholder,
  onChange,
  icon,
  error,
}) {
  return (
    <div className="input-wrapper login">
      <label htmlFor={name}>{placeholder}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        className={classNames({ error })}
      />
      <i>
        <FontAwesomeIcon icon={icon} pull="left" />
      </i>
    </div>
  );
}

InputLogin.defaultProps = {
  error: false,
};

InputLogin.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'password']).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.bool,
};
