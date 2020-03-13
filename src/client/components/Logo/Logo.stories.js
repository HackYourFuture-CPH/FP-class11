import React from 'react';
import Logo from './logo.component';
import imageFile from '../../assets/images/logo.png';

export default {
  title: 'Logo',
  component: Logo,
};

export const LogoImage = () => <Logo srcPath={imageFile} altText="Seasony" />;
