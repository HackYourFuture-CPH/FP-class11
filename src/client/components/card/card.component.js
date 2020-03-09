import React from 'react';
import PropTypes from 'prop-types';
import './card.style.css';

export default function card({ children }) {
  return <div className="card">{children}</div>;
}

card.propTypes = {
  children: PropTypes.node.isRequired,
};
