import React from 'react';
import Button from './button.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

const options = {
  Default: '',
  Pink: 'pink',
  Gray: 'gray',
};

export const Default = () => {
  const onClick = action('clicked');
  const txtBtn = text('Button Text', 'Login');
  const color = select('Pick a color', options, '');
  return <Button color={color} onClick={onClick} text={txtBtn} />;
};
