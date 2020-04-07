import React from 'react';
import PropTypes from 'prop-types';
import './input-date.css';

export default function InputDate({ text, placeholder, handleChange }) {
  const onFocus = (e) => {
    e.currentTarget.type = 'date';
  };

  return (
    <div>
      <input
        className="date"
        type={text}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={handleChange}
      />
    </div>
  );
}
InputDate.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
