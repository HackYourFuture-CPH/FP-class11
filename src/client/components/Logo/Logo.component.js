import React from 'react';
import './Logo.style.css';
import PropTypes from 'prop-types';

const Logo = ({ srcImg, altText }) => {
  return (
    <div>
      <img src={srcImg} alt={altText} className="avatar-img" />
    </div>
  );
};
Logo.propTypes = {
  srcImg: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Logo;
