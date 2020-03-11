import React from 'react';
import '../Input/Input.style.css';
import './InputLogin.style.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InputLogin({ type, placeholder, onChange, icon }) {
  return (
    <div className="form-input">
      <input type={type} placeholder={placeholder} onChange={onChange} />
      <i>
        <FontAwesomeIcon icon={icon} pull="left" />
      </i>
    </div>
  );
}

InputLogin.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
