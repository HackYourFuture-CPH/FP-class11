import React from 'react';
import { action } from '@storybook/addon-actions';
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

const handleClick = action('button clicked');

export const Dashbord = () => (
  <NavigationButton icon={faThLarge} text="DashBord" isuser={false} />
);
export const CropDetails = () => (
  <NavigationButton
    icon={faSeedling}
    text="Batch Details"
    handleClick={handleClick}
  />
);
export const AddCrop = () => (
  <NavigationButton
    icon={faPlusCircle}
    text="Add Batch"
    handleClick={handleClick}
  />
);
export const LogOut = () => (
  <NavigationButton
    icon={faUserCircle}
    text="LogOut"
    isuser={true}
    handleClick={handleClick}
  />
);
