import React from 'react';
import StageDetails from './stage-details.component';
import { storiesOf } from '@storybook/react';

storiesOf('Accordion Options', module).add('Stage Details', () => {
  return (
    <>
      <StageDetails />
    </>
  );
});
