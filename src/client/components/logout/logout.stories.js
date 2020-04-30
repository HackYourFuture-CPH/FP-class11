import React from 'react';
import Logout from './logout.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Logout',
  component: Logout,
  decorators: [withKnobs],
};

export const LogoutStory = () => {
  const userName = text('userName', 'Bob');
  const closeAction = action('close popup');
  const logout = action('logout function');

  return (
    <Logout
      userName={userName}
      openState={true}
      logoutFunc={logout}
      closeAction={closeAction}
    />
  );
};
