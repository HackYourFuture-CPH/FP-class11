import React from 'react';
import Input from './input.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

export const Default = () => {
  const type = text('Input Type', 'text');
  const placeholder = text('Input Placeholder Text', 'Enter value');
  const onChange = action('value changed');
  const disabled = boolean('Disabled', false);
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
