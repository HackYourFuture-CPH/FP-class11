import React from 'react';
import Page404 from './page404.component';
import imageFile from '../../assets/images/plants.jpg';

export default {
  title: 'Page 404',
  component: Page404,
};

const image = {
  src: imageFile,
  alt: 'Seasony plants',
};

export const PageNotFound = () => (
  <Page404 srcPath={image.src} altText={image.alt} />
);
