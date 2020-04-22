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

const SidebarMenu = ({
  isActive,
  isVisible,
  showDashboard,
  showBatchDetails,
  showAddBatch,
  logout,
}) => {
  return (
    <div className="sidebar-wrapper">
      <Logo srcPath={imageFile} altText="Seasony" />
      <NavigationButton
        icon={faThLarge}
        text="Dashboard"
        isActive={isActive}
        handleClick={showDashboard}
      />
      <NavigationButton
        icon={faSeedling}
        text="Batch Details"
        handleClick={showBatchDetails}
      />
      <NavigationButton
        icon={faPlusCircle}
        text="Add Batch"
        handleClick={showAddBatch}
        isVisible={isVisible}
      />
      <NavigationButton
        icon={faUserCircle}
        text="LogOut"
        isUser={true}
        handleClick={logout}
      />
    </div>
  );
};

SidebarMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  showDashboard: PropTypes.func.isRequired,
  showBatchDetails: PropTypes.func.isRequired,
  showAddBatch: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default SidebarMenu;
