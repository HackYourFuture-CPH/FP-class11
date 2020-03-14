import React from 'react';
import { storiesOf } from '@storybook/react';
import InputText from './InputText';

storiesOf('Input', module).add('Input text', () => (
  <div>
    <InputText
      className="input-text"
      type="text"
      placeholder="Name plant variety"
    />
  </div>
));
