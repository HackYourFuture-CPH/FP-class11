import React from 'react';
import PropTypes from 'prop-types';
import './input-text.css';

export default function InputText({
  type,
  placeholder,
  handleChange,
  value,
  disabled,
}) {
  return (
    <div>
      <input
        className="input-text"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}
InputText.defaultProps = {
  disabled: false,
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
