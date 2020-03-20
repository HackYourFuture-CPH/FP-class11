import React from 'react';
import './Sidebar.style.css';
import Button from '../Button/Button.component';
import PropTypes from 'prop-types';
import '../Button/Button.style.css';
import Logo from '../Logo/Logo.component';
import Seasony from '../Logo/seasony.jpg';

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
