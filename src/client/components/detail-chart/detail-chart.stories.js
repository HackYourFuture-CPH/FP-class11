import React from 'react';
import DetailChart from './detail-chart.component';
import data from './sensor_readings.json';

export default {
  title: 'Charts/Detail Chart',
};

const materialId = {
  temperature: '1',
  humidity: '2',
  PH: '3',
  EC: '4',
  water: '5',
};

const boundary = {
  optimum: 23,
  minimum: 16,
  maximum: 28,
};

const description = {
  temperature: 'Temperature',
  humidity: 'Humidity',
  PH: 'PH',
  EC: 'EC',
  water: 'Water level',
};

const unit = {
  temperature: '°C',
  humidity: 'g/m3',
  PH: '',
  EC: 'ppm',
  water: 'cm',
};

export const withRangeBar = () => (
  <DetailChart
    data={data}
    materialId={materialId}
    boundary={boundary}
    description={description}
    unit={unit}
  />
);
