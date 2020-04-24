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

const dashboardItems = [
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

const handleClick = action('button clicked');

export const Dashboard = () => (
  <NavigationButton
    icon={faThLarge}
    text="DashBoard"
    isUser={false}
    items={dashboardItems}
  />
);
export const BatchDetails = () => (
  <NavigationButton
    icon={faSeedling}
    text="Batch Details"
    handleClick={handleClick}
    items={[]}
  />
);
export const AddBatch = () => (
  <NavigationButton
    icon={faPlusCircle}
    text="Add Batch"
    handleClick={handleClick}
    isVisible={true}
    items={[]}
  />
);
export const LogOut = () => (
  <NavigationButton
    icon={faUserCircle}
    text="LogOut"
    isUser={true}
    handleClick={handleClick}
    items={[]}
  />
);
