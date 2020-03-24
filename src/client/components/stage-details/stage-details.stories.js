import React from 'react';
import StageDetails from './stage-details.component';
import data from './crop_stage_default_values.json';

export default {
  component: StageDetails,
  title: 'Accordion Options',
};

const cropID = 1;

const parametersAndLabels = {
  temperature: 'Temperature (°C)',
  humidity: 'Humidity (g/m3)',
  ph: 'PH',
  ec: 'EC (ppm)',
  // eslint-disable-next-line @typescript-eslint/camelcase
  water_level: 'Water level (cm)',
};

export const StageDetailsComponent = () => {
  const stages = [
    { id: 1, name: 'Seeding' },
    { id: 2, name: 'Propagation' },
    { id: 3, name: 'Maturity' },
    { id: 4, name: 'Harvest' },
  ];

  const levels = ['min', 'optimum', 'max'];

  return (
    <StageDetails
      cropID={cropID}
      parametersAndLabels={parametersAndLabels}
      stages={stages}
      levels={levels}
      data={data}
    />
  );
};
