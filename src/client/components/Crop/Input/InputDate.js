import React from 'react';
import PropTypes from 'prop-types';
import './InputDate.css';

function InputDate({ text, placeholder, handleChange }) {
  const onFocus = (e) => {
    e.currentTarget.type = 'date';
  };

  return (
    <div>
      <input
        className="input-date"
        type={text}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputDate;

InputDate.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
