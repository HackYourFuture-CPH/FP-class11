import React from 'react';
import './Notification.style.css';
import PropTypes from 'prop-types';

export default function Notification({ text }) {
  return (
    <div className="error">
      <span>{text}</span>
    </div>
  );
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
