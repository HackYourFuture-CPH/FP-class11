import React from 'react';
// import { withKnobs } from '@storybook/addon-knobs';
import BatchDetailPage from './view-batch-detail-page.component';

export default {
  component: BatchDetailPage,
  title: 'view batch details from containers',
};

export const batchDetailPage = () => {
  return <BatchDetailPage />;
};
