import React from 'react';
import LineChartForDashboard from './LineChartForDashboard.component';
import { withKnobs, array, number, color } from '@storybook/addon-knobs';

export default {
  title: 'LineChart',
  component: LineChartForDashboard,
  decorators: [withKnobs],
};

export const stylesForLineChart = () => {
  return (
    <LineChartForDashboard
      strokeGrid={color('grid color', '#fff')}
      strokeAxisAndrefArea={color('axisColor and Ref area', '#808080')}
      maxAndmin={color('MaxAndMin stroke color', '#FF0000')}
      optimalValue={color('optimalvalue stroke color', '#008000')}
      strokeWidthRef={number('RefLine stroke width', 1)}
      strokeWidthLine={number('line stroke width', 2)}
      strokeLine={color('stroke line color', '#000')}
    />
  );
};
