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

const SidebarMenu = ({ isActive, handleClick }) => {
  return (
    <div className="sidebar-wrapper">
      <Logo srcPath={imageFile} altText="Seasony" />
      <NavigationButton
        icon={faThLarge}
        text="Dashboard"
        isActive={isActive}
        handleClick={handleClick}
      />
      <NavigationButton
        icon={faSeedling}
        text="Batch Details"
        handleClick={handleClick}
      />
      <NavigationButton
        icon={faPlusCircle}
        text="Add Batch"
        handleClick={handleClick}
      />
      <NavigationButton
        icon={faUserCircle}
        text="LogOut"
        isUser={true}
        handleClick={handleClick}
      />
    </div>
  );
};

SidebarMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SidebarMenu;
