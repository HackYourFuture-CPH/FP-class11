import React from 'react';
import './add-crop-image.style.css';

export default function AddCropImage() {
  return (
    <button type="submit" className="add-image">
      <svg
        width="54"
        height="58"
        viewBox="0 0 54 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M53.4005 31.7519V25.5119H30.3605V0.671875H23.5205V25.5119H0.480469V31.7519H23.5205V57.3119H30.3605V31.7519H53.4005Z"
          fill="#3B4349"
        />
      </svg>
      Add Crop Image
    </button>
  );
}
