import React from 'react';
import Logo from './logo.component';
import Seasony from './seasony.jpg';

export default { title: 'logo', component: 'Logo' };

export const logoimg = () => <Logo src={Seasony} alt="Seasony-img" />;
