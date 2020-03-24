import React from 'react';
import Login from './login.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'ContainerLayouts/Login',
  component: Login,
  decorators: [withKnobs],
};

const notifications = {
  None: null,
  Email: 'email',
  Password: 'password',
  General: 'general',
};

export const LoginContainer = () => {
  const txtTitle = text('title', 'Login');
  const errorNotifications = select(
    'Error Notification',
    notifications,
    notifications.None,
  );
  const handleChange = action('changed input field');
  const loginFunc = action('login to dashboard');
  return (
    <Login
      title={txtTitle}
      errorNotifications={errorNotifications}
      handleChange={handleChange}
      loginFunc={loginFunc}
    />
  );
};
