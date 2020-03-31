import React from 'react';
import LineChartForDashboard from './line-chart-for-dashboard.component';
import { withKnobs, number, color, object } from '@storybook/addon-knobs';

export default {
  title: 'LineChart',
  component: LineChartForDashboard,
  decorators: [withKnobs],
};

const tempData = [
  {
    name: 'shiso',
    timestamp: 1577836860000,
    temp: 22.95,
  },
  {
    name: 'shiso',
    timestamp: 1577923260000,
    temp: 17.5,
  },
  {
    name: 'shiso',
    timestamp: 1578009660000,
    temp: 20.5,
  },
  {
    name: 'shiso',
    timestamp: 1578096060000,
    temp: 16,
  },
  {
    name: 'shiso',
    timestamp: 1578182460000,
    temp: 23.5,
  },
];

const storkeGridColor = color('grid color', '#fff');
const strokeAxisColor = color('axisColor and Ref area', '#808080');
const minValueColor = color('Min stroke color', '#FF0000');
const maxValueColor = color('Max stroke color', '#FF0000');
const optimalValueColor = color('optimalvalue stroke color', '#008000');
const strokeWidthRefNumber = number('RefLine stroke width', 1);
const strokeWidthLineNumber = number('line stroke width', 2);
const strokeLineNumber = color('stroke line color', '#000');
const referanceAreaColor = color('axisColor and Ref area', '#808080');
const tempChartData = object('chartData', tempData);

export const stylesForLineChart = () => {
  return (
    <LineChartForDashboard
      tempData={tempChartData}
      strokeGrid={storkeGridColor}
      strokeAxis={strokeAxisColor}
      minColor={minValueColor}
      maxColor={maxValueColor}
      optimalValue={optimalValueColor}
      strokeWidthRef={strokeWidthRefNumber}
      strokeWidthLine={strokeWidthLineNumber}
      strokeLine={strokeLineNumber}
      ReferanceAreaColor={referanceAreaColor}
    />
  );
};
