import React from 'react';
// import { withKnobs } from '@storybook/addon-knobs';
import BatchDetailPage from './view-batch-detail-page.component';

export default {
  component: BatchDetailPage,
  title: 'view batch details page',
  // decorators: [withKnobs],
};

export const batchDetailPage = () => {
  return <BatchDetailPage batchId="2" />;
};
