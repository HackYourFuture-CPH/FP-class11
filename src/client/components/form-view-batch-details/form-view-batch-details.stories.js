import React from 'react';
import FormViewBatch from './form-view-batch-details.component';
import data from './data.json';

export default { title: 'Form view batch' };

const { crop, batch } = data;

export const FormViewBatchDetails = () => (
  <FormViewBatch batch={batch[0]} crop={crop[0]} />
);
