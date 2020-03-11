import React from 'react';
import Container from './Container.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Container',
    component: Container,
    decorators: [withKnobs]
};
  
export const LoginContainer = () => <Container title={text('title', 'Login')} />;

