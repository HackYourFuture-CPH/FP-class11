import React from 'react';
import Login from './login.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Login',
  component: Login,
  decorators: [withKnobs],
};

const notifications = {
  None: null,
  Email: 'email',
  Password: 'password',
  General: 'general',
};

const messages = {
  Email: 'This is error message for wrong email address.',
  Password: 'This is error message for wrong password.',
  General: 'Something went wrong. Try again later.',
};

export const LoginForm = () => {
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
      errorMessages={
        (errorNotifications === 'email' && messages.Email) ||
        (errorNotifications === 'password' && messages.Password) ||
        (errorNotifications === 'general' && messages.General)
      }
      handleChange={handleChange}
      loginFunc={loginFunc}
    />
  );
};
