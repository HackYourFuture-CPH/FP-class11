import React from 'react';
import './sidebar.style.css';
import Button from '../navigation-button/navigation-button.component';
import PropTypes from 'prop-types';
import '../navigation-button/navigation-button.style.css';
import Logo from '../logo/logo.component';
import Seasony from '../logo/seasony.jpg';

import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = ({ isactive, isuser }) => {
  return (
    <div className="sidebar-wrapper">
      <Logo src={Seasony} alt="Seasony-img" />
      <Button icon={faThLarge} text="Dashbord" isactive={isactive} />
      <Button icon={faSeedling} text="Crop Details" />
      <Button icon={faPlusCircle} text="Add Crop" />
      <Button icon={faUserCircle} text="LogOut" isuser={isuser} />
    </div>
  );
};

SidebarMenu.propTypes = {
  isactive: PropTypes.bool.isRequired,
  isuser: PropTypes.bool.isRequired,
};

export default SidebarMenu;
