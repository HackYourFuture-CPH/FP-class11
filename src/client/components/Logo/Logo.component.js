import React from 'react';
import './logo.style.css';
import PropTypes from 'prop-types';

const Logo = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className="logo-img" />
    </div>
  );
};
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Logo;
