import React from 'react';
import './button.style.css';
import PropTypes from 'prop-types';

export default function Button({ text, onClick, color }) {
  return (
    <div className="btn-wrapper">
      <button className={color} type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.defaultProps = {
  color: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};
