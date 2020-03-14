import React from 'react';
import './Sidebar.style.css';
import Button from '../Button/Button.component';
import PropTypes from 'prop-types';
import '../Button/Button.style.css';
import Logo from '../Logo/Logo.component';

import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = ({ active, user }) => {
  return (
    <div className="sidebar-wrapper">
      <Logo />
      <Button icon={faThLarge} text="DashBord" active={active} />
      <Button icon={faSeedling} text="Crop Details" />
      <Button icon={faPlusCircle} text="Add Crop" />
      <Button icon={faUserCircle} text="LogOut" user={user} />
    </div>
  );
};

SidebarMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  user: PropTypes.bool.isRequired,
};

export default SidebarMenu;
