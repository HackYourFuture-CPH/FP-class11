import React from 'react';
import AddCrop from '../AddCrop/AddCrop';
import { storiesOf } from '@storybook/react';

storiesOf('Accordion', module).add('Add Crop Details', () => {
  return (
    <>
      <AddCrop />
    </>
  );
});
