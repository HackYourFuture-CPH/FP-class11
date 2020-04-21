import React, { useContext } from 'react';
import './sidebar.style.css';
import NavigationButton from '../navigation-button/navigation-button.component';
import '../navigation-button/navigation-button.style.css';
import Logo from '../logo/logo.component';
import imageFile from '../../assets/images/logo.png';
import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import { ChartDataContext } from '../../containers/chart-detail-page/chart-detail-page.context';

const SidebarMenu = () => {
  const { buttonClick, buttonActive } = useContext(ChartDataContext);

  return (
    <div className="sidebar-wrapper">
      <Logo srcPath={imageFile} altText="Seasony" />
      <NavigationButton
        icon={faThLarge}
        text="Dashboard"
        isActive={buttonActive}
        handleClick={buttonClick}
      />
      <NavigationButton
        icon={faSeedling}
        text="Batch Details"
        handleClick={() => null}
      />
      <NavigationButton
        icon={faPlusCircle}
        text="Add Batch"
        handleClick={() => null}
      />
      <NavigationButton
        icon={faUserCircle}
        text="LogOut"
        handleClick={() => null}
      />
    </div>
  );
};

export default SidebarMenu;
