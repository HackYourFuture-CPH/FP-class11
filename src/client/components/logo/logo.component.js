import React from 'react';
import './logo.style.css';
import PropTypes from 'prop-types';

export default function Logo({ srcPath, altText }) {
  return (
    <div className="logo">
      <img src={srcPath} alt={altText} />
    </div>
  );
}

Logo.propTypes = {
  srcPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
