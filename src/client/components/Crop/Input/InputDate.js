import React from 'react';
import './InputDate.css';

function InputDate({ text, placeholder, handleInputChange }) {
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
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputDate;
