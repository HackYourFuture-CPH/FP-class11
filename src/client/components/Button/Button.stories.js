import React from 'react';
import Button from './Button.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Default = () => (
  <Button onClick={action('clicked')} text={text('Button Text', 'Login')} />
);
