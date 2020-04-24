import React from 'react';
import ListBatches from './list-batches.component';
import batchesData from './batch-data.json';

export default { title: 'ListBatches' };

export const ListBatchesTable = () => <ListBatches batchData={batchesData} />;
