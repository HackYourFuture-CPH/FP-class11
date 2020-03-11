import React from 'react';
import PropTypes from 'prop-types';
import './label.styles.css';

export default function Label({ title, backgroundColor }) {
  return (
    <span style={{ backgroundColor }} className="label">
      {title}
    </span>
  );
}

Label.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
