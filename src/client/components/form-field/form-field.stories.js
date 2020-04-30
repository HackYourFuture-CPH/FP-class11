import React from 'react';
import FormField from './form-field.component';

export default { title: 'FormField' };
export const AddBatchForm = () => (
  <FormField
    cropId={1}
    setCropId={() => null}
    setStartSeedDate={() => null}
    setSeedPot={() => null}
    setCustomerName={() => null}
    handleSubmit={() => null}
  />
);
