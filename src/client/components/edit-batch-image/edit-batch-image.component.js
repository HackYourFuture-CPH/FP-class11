import React from 'react';
import './edit-batch-image.style.css';
import PropTypes from 'prop-types';

export default function BatchImage({
  srcPath,
  altText,
  srcPenPath,
  altIconText,
}) {
  return (
    <div className="batch-image-wrapper">
      <img className="edit-image" src={srcPath} alt={altText} />
      <button type="submit" className="edit-btn">
        <img src={srcPenPath} alt={altIconText} />
      </button>
    </div>
  );
}

BatchImage.propTypes = {
  srcPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  srcPenPath: PropTypes.string.isRequired,
  altIconText: PropTypes.string.isRequired,
};
