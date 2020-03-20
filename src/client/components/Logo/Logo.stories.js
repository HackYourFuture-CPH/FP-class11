import React from 'react';
import Logo from './Logo.component';
import Seasony from './seasony.jpg';

export default { title: 'logo', component: 'Logo' };

export const logoimg = () => <Logo srcImg={Seasony} altText="Seasony-img" />;
