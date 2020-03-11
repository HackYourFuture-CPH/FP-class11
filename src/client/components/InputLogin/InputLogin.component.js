import React from 'react';
import '../Input/Input.style.css';
import './InputLogin.style.css';
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
    <div className="form-input">
      <input
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
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.bool,
};
