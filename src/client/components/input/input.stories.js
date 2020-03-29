import React from 'react';
import Input from './input.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  component: Input,
  decorators: [withKnobs],
};

const types = {
  Text: 'text',
  Email: 'email',
  Password: 'password',
  Number: 'number',
};

export const Default = () => {
  const type = select('Input Type', types, 'text');
  const onChange = action('value changed');
  const disabled = boolean('Disabled', false);
  return (
    <Input
      type={type}
      placeholder={
        (type === types.Text && 'Name') ||
        (type === types.Email && 'Email') ||
        (type === types.Password && 'Password') ||
        (type === types.Number && 'Number')
      }
      onChange={onChange}
      disabled={disabled}
    />
  );
};
