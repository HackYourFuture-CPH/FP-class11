import React from 'react';
import ChartbarMenu from './chart-data-button.component';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
  title: 'ChartDataButtons',
  component: ChartbarMenu,
  decorators: [withKnobs],
};

const label = 'value';
const defaultValue = {
  buttonDays: 'Last 5 Days',
  buttonWeek: 'Last Week',
  buttonWeeks: 'Last Two Weeks',
  buttonMonth: 'Last Month',
  buttonCustom: 'Custom',
};

export const Chartdatabuttons = () => {
  const value = object(label, defaultValue);
  return <ChartbarMenu buttonLabel={value} />;
};
