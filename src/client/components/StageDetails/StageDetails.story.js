import React from 'react';
import StageDetails from './StageDetails.component';
import { storiesOf } from '@storybook/react';

storiesOf('Accordion Options', module).add('Stage Details', () => {
  return (
    <>
      <StageDetails />
    </>
  );
});
