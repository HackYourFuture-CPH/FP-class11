import React from 'react';
import { storiesOf } from '@storybook/react';
import InputDate from './InputDate';

storiesOf('InputDate', module).add('Input Date', () => (
  <div>
    <InputDate
      className="input-date"
      type="text"
      placeholder="Date"
      onFocus="onFocus"
    />
  </div>
));
