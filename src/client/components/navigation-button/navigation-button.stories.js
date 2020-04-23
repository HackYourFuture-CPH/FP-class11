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

export const Dashboard = () => (
  <NavigationButton icon={faThLarge} text="DashBoard" isUser={false} />
);
export const BatchDetails = () => (
  <NavigationButton
    icon={faSeedling}
    text="Batch Details"
    handleClick={handleClick}
  />
);
export const AddBatch = () => (
  <NavigationButton
    icon={faPlusCircle}
    text="Add Batch"
    handleClick={handleClick}
    isVisible={true}
  />
);
export const LogOut = () => (
  <NavigationButton
    icon={faUserCircle}
    text="LogOut"
    isUser={true}
    handleClick={handleClick}
  />
);
