import React from 'react';
import ButtonDashboard from './ButtonDashboard.component';

import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'ButtonDashboard',
  component: ButtonDashboard,
  decorators: [withKnobs],
};

export const buttonWithChangableText = () => (
  <ButtonDashboard buttonText="Lastweek" />
);
export const buttonWithKnobs = () => (
  <ButtonDashboard
    buttonText={text('buttonText', 'Custom')}
    active={boolean('active', false)}
  />
);
