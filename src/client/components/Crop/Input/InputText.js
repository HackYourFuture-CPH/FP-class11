import React from 'react';
import './InputText.css';

function InputText({ text, placeholder, handleInputChange }) {
  return (
    <div>
      <input
        className="input-text"
        type={text}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputText;
