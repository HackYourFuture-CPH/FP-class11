import React from 'react';
import { useHistory } from 'react-router-dom';
import './sidebar.style.css';
import NavigationButton from '../navigation-button/navigation-button.component';
import PropTypes from 'prop-types';
import Firebase from '../../firebase/index';
import '../navigation-button/navigation-button.style.css';
import Logo from '../logo/logo.component';
import imageFile from '../../assets/images/logo.png';
import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

const SidebarMenu = ({ isActive }) => {
  const history = useHistory();
  return (
    <div className="sidebar-wrapper">
      <Logo srcPath={imageFile} altText="Seasony" />
      <NavigationButton
        icon={faThLarge}
        text="Dashboard"
        isActive={isActive}
        handleClick={() => {
          // change isactive
          history.replace('/dashboard');
        }}
      />
      <NavigationButton
        icon={faSeedling}
        text="Batch Details"
        handleClick={() => history.replace('/batch-details')}
      />
      <NavigationButton
        icon={faPlusCircle}
        text="Add Batch"
        handleClick={() => history.replace('/add-batch')}
      />
      <NavigationButton
        icon={faUserCircle}
        text="LogOut"
        isUser={true}
        handleClick={() => Firebase.signOut()}
      />
    </div>
  );
};

SidebarMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  // handleClick: PropTypes.func.isRequired,
};

export default SidebarMenu;
