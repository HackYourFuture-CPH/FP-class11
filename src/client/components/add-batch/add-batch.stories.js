import React from 'react';
import AddBatch from './add-batch.component';

export default {
  title: 'AddBatch',
};

export const AddBatchPage = () => (
  <AddBatch
    cropId={1}
    setCropId={() => null}
    setStartSeedDate={() => null}
    setSeedPot={() => null}
    setCustomerName={() => null}
    handleSubmit={() => null}
  />
);
