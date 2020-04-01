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

const SidebarMenu = ({ isactive, handleClick }) => {
  return (
    <div className="sidebar-wrapper">
      <Logo srcPath={imageFile} altText="Seasony" />
      <NavigationButton
        icon={faThLarge}
        text="Dashboard"
        isactive={isactive}
        handleClick={handleClick}
      />
      <NavigationButton
        icon={faSeedling}
        text="Crop Details"
        handleClick={handleClick}
      />
      <NavigationButton
        icon={faPlusCircle}
        text="Add Crop"
        handleClick={handleClick}
      />
      <NavigationButton
        icon={faUserCircle}
        text="LogOut"
        handleClick={handleClick}
      />
    </div>
  );
};

SidebarMenu.propTypes = {
  isactive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SidebarMenu;
