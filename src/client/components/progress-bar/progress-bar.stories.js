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
        { name: 'seeding', duration: number('Seeding duration', 3) },
        {
          name: 'propagation',
          duration: number('Propagation duration', 14),
        },
        { name: 'maturity', duration: number('Maturity duration', 28) },
        { name: 'harvest', duration: number('Harvesting duration', 4) },
        { name: 'delivery', duration: number('Delivery duration', 3) },
      ]}
    />
  );
};
