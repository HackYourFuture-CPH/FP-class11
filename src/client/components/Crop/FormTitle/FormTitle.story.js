import React from 'react';
import FormTitle from './FormTitle';
import { storiesOf } from '@storybook/react';

storiesOf('FormTitle', module).add('Add Crop form title', () => {
  return (
    <div>
      <FormTitle title=" ADD CROP"></FormTitle>{' '}
    </div>
  );
});
