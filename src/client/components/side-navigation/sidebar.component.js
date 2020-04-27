import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.style.css';
import NavigationButton from '../navigation-button/navigation-button.component';
import Logo from '../logo/logo.component';
import imageFile from '../../assets/images/logo.png';
import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

export const dashboardItems = [
  {
    id: 1,
    value: 'Temperature',
    to: '/chart-details/temperature',
    slug: 'temperature',
  },
  { id: 2, value: 'Humidity', to: '/chart-details/humidity', slug: 'humidity' },
  { id: 3, value: 'PH', to: '/chart-details/ph', slug: 'ph' },
  { id: 4, value: 'EC', to: '/chart-details/ec', slug: 'ec' },
  { id: 5, value: 'Water', to: '/chart-details/water', slug: 'water' },
];

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
        items={dashboardItems}
      />
      <NavigationButton
        icon={faSeedling}
        text="Batch Details"
        handleClick={showBatchDetails}
        items={[]}
      />
      <NavigationButton
        icon={faPlusCircle}
        text="Add Batch"
        handleClick={showAddBatch}
        isVisible={isVisible}
        items={[]}
      />
      <NavigationButton
        icon={faUserCircle}
        text="Log Out"
        isUser={true}
        handleClick={logout}
        items={[]}
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
