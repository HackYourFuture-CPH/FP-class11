import React from 'react';
import Input from './Input.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Default = () => (
  <Input
    type={text('Input Type', 'text')}
    placeholder={text('Input Placeholder Text', 'Enter value')}
    onChange={action('value changed')}
  />
);
