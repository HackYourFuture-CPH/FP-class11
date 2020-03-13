import React from 'react';
import StageDetails from './stage-details.component';
import { storiesOf } from '@storybook/react';

storiesOf('Accordion Options', module).add('Stage Details', () => {
  const stageDetailsNameTitlePairs = {
    temperature: 'Temperature (°C)',
    humidity: 'Humidity (g/m3)',
    ph: 'PH',
    ec: 'EC (ppm)',
    'water-level': 'Water level (cm)',
  };

  const stages = ['Seeding', 'Propagation', 'Maturity', 'Harvest'];
  const levels = ['Optimum', 'Min', 'Max'];

  return (
    <StageDetails
      inputNameTitlePairsObj={stageDetailsNameTitlePairs}
      buttonValuesArr={stages}
      labelValuesArr={levels}
      saveFunc={() => null}
    />
  );
});
