/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
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

const { sensors_readings } = data;

const filterByMaterialId = sensors_readings.filter(
  (sensor) => sensor.fk_material_id === '1',
);

export const withRangeBar = () => (
  <DetailChart
    data={filterByMaterialId}
    materialId={materialId.temperature}
    boundary={boundary}
    description={description.temperature}
    unit={unit.temperature}
  />
);
