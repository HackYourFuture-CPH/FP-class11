import React from 'react';
import DashbordItems from './Dashbord.component';

export default { title: 'DashbordItems', component: 'DashbordItems' };
const items = [
  { id: 1, value: 'Temperature' },
  { id: 2, value: 'Humidity' },
  { id: 3, value: 'PH' },
  { id: 4, value: 'EC' },
  { id: 5, value: 'Water' },
];
export const displayitems = () => <DashbordItems items={items} />;
