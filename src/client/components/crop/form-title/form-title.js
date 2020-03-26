import React from 'react';
import PropTypes from 'prop-types';
import './form-title.css';

export default function FormTitle({ title }) {
  return <div className="form-title">{title}</div>;
}
FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
