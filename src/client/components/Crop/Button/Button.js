import React from 'react';
import './Button.css';

const Button = ({ submit, handleSubmit, placeholder }) => {
  return (
    <button className="Button-class" type={submit} onClick={handleSubmit}>
      {placeholder}
    </button>
  );
};

export default Button;
