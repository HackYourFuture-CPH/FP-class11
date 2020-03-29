import React from 'react';
import './sidebar.style.css';
import NavigationButton from '../navigation-button/navigation-button.component';
import PropTypes from 'prop-types';
import '../navigation-button/navigation-button.style.css';
import Logo from '../logo/logo.component';
import imageFile from '../../assets/images/logo.png';
import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = ({ isactive, isuser }) => {
  return (
    <div className="sidebar-wrapper">
      <Logo srcPath={imageFile} altText="Seasony" />
      <NavigationButton icon={faThLarge} text="Dashbord" isactive={isactive} />
      <NavigationButton icon={faSeedling} text="Crop Details" />
      <NavigationButton icon={faPlusCircle} text="Add Crop" />
      <NavigationButton icon={faUserCircle} text="LogOut" isuser={isuser} />
    </div>
  );
};

SidebarMenu.propTypes = {
  isactive: PropTypes.bool.isRequired,
  isuser: PropTypes.bool.isRequired,
};

export default SidebarMenu;
