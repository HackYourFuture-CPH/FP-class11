import React from 'react';
import PropTypes from 'prop-types';
import './card.style.css';

export const CardTitle = ({ title }) => {
  return <h1 className="card-title">{title}</h1>;
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
