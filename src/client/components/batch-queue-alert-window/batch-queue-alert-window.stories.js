import React from 'react';
import BatchQueueAlertWindow from './batch-queue-alert-window.component';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Batch Queue Alert Window',
  component: BatchQueueAlertWindow,
  decorators: [withKnobs],
};

export const BatchQueueAlertWindowStory = () => {
  const batchItem = {
    id: 1,
    name: 'Lettuce ',
    plant_variety: 'Asteraceae',
    customer_name: 'Italian cucine',
    number_of_seeded_pots: 50,
    seeding_date: '2020-04-19T22:00:00.000Z',
    current_stage: {
      stage: 'propagation',
      day: 4,
    },
    status: 'active',
  };

  const closeAction = action('close popup');

  return (
    <BatchQueueAlertWindow
      batchItem={batchItem}
      openState={true}
      closeAction={closeAction}
    />
  );
};
