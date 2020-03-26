import React from 'react';
import NavigationButton from './navigation-button.component';
import {
  faUserCircle,
  faThLarge,
  faPlusCircle,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';
import './navigation-button.style.css';

export default {
  title: 'NavigationButton',
};

export const Dashbord = () => (
  <NavigationButton icon={faThLarge} text="DashBord" />
);
export const CropDetails = () => (
  <NavigationButton icon={faSeedling} text="Crop Details" />
);
export const AddCrop = () => (
  <NavigationButton icon={faPlusCircle} text="Add Crop" />
);
export const LogOut = () => (
  <NavigationButton icon={faUserCircle} text="LogOut" />
);
