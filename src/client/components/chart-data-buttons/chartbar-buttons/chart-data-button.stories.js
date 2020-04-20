import React from 'react';
import ChartbarMenu from './chart-data-button.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'ChartData-Buttons',
  component: ChartbarMenu,
  decorators: [withKnobs],
};

const label = 'value';
const defaultValue = [
  { id: 1, label: 'Last 5 Days' },
  { id: 2, label: 'Last Week' },
  { id: 3, label: 'Last Two Weeks' },
  { id: 4, label: 'Last Month' },
  { id: 5, label: 'Custom' },
];

export const ChartdataButtons = () => {
  const value = object(label, defaultValue);
  return <ChartbarMenu buttons={value} defaultSelection={{ id: 2 }} />;
};
