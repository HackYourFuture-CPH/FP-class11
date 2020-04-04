import React from 'react';
import './editCrop.style.css';
import PropTypes from 'prop-types';
import penImage from '../../assets/images/edit-icon.png';

export default function EditCropImage({ srcPath, altText }) {
  return (
    <div>
      <img className="edit-image" src={srcPath} alt={altText} />
      <button type="submit" className="edit-icon">
        <img src={penImage} alt="editImage" />
      </button>
    </div>
  );
}

EditCropImage.propTypes = {
  srcPath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
