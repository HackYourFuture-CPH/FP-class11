import React from 'react';
import Image from './editCrop.component';
import image from '../../assets/images/crop-image.png';

export default {
  title: 'EditCropImage',
  component: Image,
};

export const EditCropImageStory = () => {
  return (
    <>
      <Image srcPath={image} altText="A crop" />
    </>
  );
};
