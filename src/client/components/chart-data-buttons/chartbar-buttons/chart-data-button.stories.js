import React from 'react';
import ChartbarMenu from './chart-data-button.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'ChartDataButtons',
  component: ChartbarMenu,
  decorators: [withKnobs],
};

const label = 'value';
const defaultValue = [
  { buttonId: 1, buttonLabel: 'Last 5 Days' },
  { buttonId: 2, buttonLabel: 'Last Week' },
  { buttonId: 3, buttonLabel: 'Last Two Weeks' },
  { buttonId: 4, buttonLabel: 'Last Month' },
  { buttonId: 5, buttonLabel: 'Custom' },
];

export const Chartdatabuttons = () => {
  const value = object(label, defaultValue);
  return <ChartbarMenu buttonLabel={value} />;
};
