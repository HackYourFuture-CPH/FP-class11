import React from 'react';
import ProgressBar from './progress-bar.component';
import { withKnobs, number, text } from '@storybook/addon-knobs';

export default {
  component: 'ProgressBar',
  title: 'Progress bar',
  decorators: [withKnobs],
};
export const progressBar = () => {
  return (
    <ProgressBar
      startDate={text('Start date', '2020-03-03')}
      currentDate={text('Current date', '2020-03-21')}
      stages={[
        { name: 'seeding', duration: number('Seeding stage duration', 3) },
        {
          name: 'propagation',
          duration: number('Propagation stage duration', 14),
        },
        { name: 'maturity', duration: number('Maturity stage duration', 28) },
        { name: 'harvest', duration: number('Harvest stage duration', 4) },
        { name: 'delivery', duration: number('Delivery stage duration', 3) },
      ]}
    />
  );
};
