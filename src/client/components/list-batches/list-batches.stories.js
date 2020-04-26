import React from 'react';
import { action } from '@storybook/addon-actions';
import ListBatches from './list-batches.component';
import data from './batch-data.json';

export default { title: 'ListBatches' };

export const ListBatchesTable = () => (
  <ListBatches
    batchData={data.batchesData}
    openDashboardFunc={action('open dashboard')}
    openAlertWindowFunc={action('open alert window')}
  />
);
