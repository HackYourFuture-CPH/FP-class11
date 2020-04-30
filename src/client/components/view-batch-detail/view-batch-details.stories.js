import React from 'react';
import ViewBatchDetails from './view-batch-details.component';

export default {
  title: 'View Batch Detail',
};
export const ViewBatch = () => (
  <ViewBatchDetails
    batch={{
      id: '1',
      seeding_date: '2112-12-12',
      number_of_seeded_pots: '10',
      customer_name: 'mahen',
    }}
    crop={{ name: 'maheen' }}
  />
);
