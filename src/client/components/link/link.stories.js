import React from 'react';
import Link from './link.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Link',
  component: Link,
  decorators: [withKnobs],
};

export const ForgotPassword = () => (
  <Link
    href={text('Link URL', '/forgotpassword')}
    text={text('Link text', 'Forgot password')}
  />
);
