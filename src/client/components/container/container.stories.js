import React from 'react';
import Container from './container.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'ContainerLayouts/Container',
  component: Container,
  decorators: [withKnobs],
};

export const LoginContainer = () => (
  <Container title={text('title', 'Login')} />
);

export const ErrorContainer = () => (
  <Container title={text('title', 'Login')} error />
);