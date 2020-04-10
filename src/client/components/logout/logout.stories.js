import React from 'react';
import Logout from './logout.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Logout',
  component: Logout,
  decorators: [withKnobs],
};

export const LogoutStory = () => {
  const userName = text('userName', 'Bob');
  return <Logout userName={userName} openState={true} />;
};
