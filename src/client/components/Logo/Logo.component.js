import React from 'react';
import './Logo.style.css';
import Seasony from './seasony.jpg';

const Logo = () => {
  return (
    <div>
      <img src={Seasony} alt="avatar" className="avatar-img" />
    </div>
  );
};

export default Logo;
