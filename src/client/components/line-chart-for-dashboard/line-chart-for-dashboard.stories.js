import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import LineChartForDashboard from './line-chart-for-dashboard.component';
import data from './sensors-readings.json';

export default {
  title: 'LineChart',
  component: LineChartForDashboard,
  decorators: [withKnobs],
};

const materials = {
  temperature: '1',
  humidity: '2',
  PH: '3',
  EC: '4',
  water: '5',
};

const boundaries = {
  1: {
    optimum: 23,
    minimum: 16,
    maximum: 28,
  },
  2: {
    optimum: 80,
    minimum: 70,
    maximum: 90,
  },
  3: {
    optimum: 5,
    minimum: 4,
    maximum: 6,
  },
  4: {
    optimum: 900,
    minimum: 700,
    maximum: 1120,
  },
  5: {
    optimum: 500,
    minimum: 150,
    maximum: 900,
  },
};

const descriptions = {
  1: 'Temperature',
  2: 'Humidity',
  3: 'PH',
  4: 'EC',
  5: 'Water level',
};

const units = {
  1: '°C',
  2: '%',
  3: 'pH',
  4: 'ppm',
  5: '㎥',
};

export const stylesForLineChart = () => {
  const materialId = select('Material id', materials, materials.temperature);
  const boundary = boundaries[materialId];
  const description = descriptions[materialId];
  const unit = units[materialId];
  const showDetailChartFunc = action('open detail chart page');
  return (
    <LineChartForDashboard
      data={data}
      materialId={materialId}
      boundary={boundary}
      description={description}
      unit={unit}
      showDetailChartFunc={showDetailChartFunc}
    />
  );
};
