import React from 'react';
import LineChartForDashboard from './LineChartForDashboard.component';
import { withKnobs, number, color } from '@storybook/addon-knobs';

export default {
  title: 'LineChart',
  component: LineChartForDashboard,
  decorators: [withKnobs],
};

const storkeGridColor = color('grid color', '#fff');
const strokeAxisColor = color('axisColor and Ref area', '#808080');
const minValueColor = color('Min stroke color', '#FF0000');
const maxValueColor = color('Max stroke color', '#FF0000');
const optimalValueColor = color('optimalvalue stroke color', '#008000');
const strokeWidthRefNumber = number('RefLine stroke width', 1);
const strokeWidthLineNumber = number('line stroke width', 2);
const strokeLineNumber = color('stroke line color', '#000');
const referanceAreaColor = color('axisColor and Ref area', '#808080');

export const stylesForLineChart = () => {
  return (
    <LineChartForDashboard
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
