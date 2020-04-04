import React from 'react';
import '../input/input.style.css';
import './input-login.style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InputLogin({
  type,
  placeholder,
  onChange,
  icon,
  error,
}) {
  return (
    <div className="input-wrapper login">
      <label htmlFor={type}>{placeholder}</label>
      <input
        name={type}
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
  type: PropTypes.oneOf(['email', 'password']).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.bool,
};
