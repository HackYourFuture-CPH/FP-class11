import React from 'react';
import Button from './Button.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const options = {
  Pink: 'pink',
  Gray: 'gray',
};

export const Default = () => (
  <Button onClick={action('clicked')} text={text('Button Text', 'Login')} />
);

export const Pink = () => (
  <Button
    color={select('Pick a color', options, 'pink')}
    onClick={action('clicked')}
    text={text('Button Text', 'Logout')}
  />
);

export const Gray = () => (
  <Button
    color={select('Pick a color', options, 'gray')}
    onClick={action('clicked')}
    text={text('Button Text', 'Cancel')}
  />
);
