import React from 'react';
import PropTypes from 'prop-types';
import './input-date.css';

export default function InputDate({
  type,
  placeholder,
  handleChange,
  value,
  disabled,
}) {
  const onFocus = (e) => {
    e.currentTarget.type = 'date';
  };

  return (
    <div>
      <input
        className="date"
        type={type}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}
InputDate.defaultProps = {
  disabled: true,
};
InputDate.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
