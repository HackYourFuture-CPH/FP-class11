import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import StageDetails from './stage-details.component';

export default {
  component: StageDetails,
  title: 'Accordion Options',
  decorators: [withKnobs],
};

const stageDetailsNameTitlePairs = {
  temperature: 'Temperature (°C)',
  humidity: 'Humidity (g/m3)',
  ph: 'PH',
  ec: 'EC (ppm)',
  'water-level': 'Water level (cm)',
};

export const StageDetailsComponent = () => {
  const stages = ['Seeding', 'Propagation', 'Maturity', 'Harvest'];
  const levels = ['Optimum', 'Min', 'Max'];

  return (
    <StageDetails
      inputNameTitlePairsObj={stageDetailsNameTitlePairs}
      buttonValuesArr={stages}
      labelValuesArr={levels}
      saveFunc={action('save stage details')}
    />
  );
};
