import React from 'react';
import DashboardItems from './dashboard-items.component';

export default { title: 'DashboardItems', component: 'DashboardItems' };

const items = [
  { id: 1, value: 'Temperature' },
  { id: 2, value: 'Humidity' },
  { id: 3, value: 'PH' },
  { id: 4, value: 'EC' },
  { id: 5, value: 'Water' },
];

export const displayitems = () => (
  <DashboardItems items={items} handleClick={() => null} />
);
