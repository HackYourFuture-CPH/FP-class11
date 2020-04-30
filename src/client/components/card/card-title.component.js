import React from 'react';
import PropTypes from 'prop-types';
import './card.style.css';

export const CardTitle = ({ title }) => {
  return <h3>{title}</h3>;
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
