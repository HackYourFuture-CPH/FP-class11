import React from 'react';
import Container from './container.component';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'ContainerLayouts/Container',
  component: Container,
  decorators: [withKnobs],
};

export const LoginContainer = () => {
  const txtTitle = text('title', 'Login');
  const error = boolean('isError', false);
  const handleChange = action('changed input field');
  const loginFunc = action('login to dashboard');
  return (
    <Container
      title={txtTitle}
      error={error}
      handleChange={handleChange}
      loginFunc={loginFunc}
    />
  );
};
