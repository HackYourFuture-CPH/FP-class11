import React from 'react';
import Login from './container.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'ContainerLayouts/Login',
  component: Login,
  decorators: [withKnobs],
};

export const LoginContainer = () => {
  const txtTitle = text('title', 'Login');
  const error = boolean('isError', false);
  const handleChange = action('changed input field');
  const loginFunc = action('login to dashboard');
  return (
    <Login
      title={txtTitle}
      error={error}
      handleChange={handleChange}
      loginFunc={loginFunc}
    />
  );
};
