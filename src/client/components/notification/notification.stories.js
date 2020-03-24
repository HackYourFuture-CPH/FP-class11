import React from 'react';
import Notification from './notification.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Notification',
  component: Notification,
  decorators: [withKnobs],
};

export const Error = () => {
  const errorText = text(
    'Error text',
    'This is error message for wrong email address.',
  );
  return <Notification text={errorText} />;
};
