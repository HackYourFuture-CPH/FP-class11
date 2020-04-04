import React from 'react';
import BatchImage from './edit-batch-image.component';
import image from '../../assets/images/crop-image.png';
import penImage from '../../assets/images/edit-icon.png';

export default {
  title: 'EditBatchImage',
  component: BatchImage,
};

export const EditImageStory = () => (
  <BatchImage
    srcPath={image}
    srcPenPath={penImage}
    altText="A crop"
    altIconText="A icon"
  />
);
