import React from 'react';
import Link from './link.component';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Link',
  component: Link,
  decorators: [withKnobs],
};

export const ForgotPassword = () => {
  const href = text('Link URL', '/forgotpassword');
  const txtLink = text('Link text', 'Forgot password');
  return <Link href={href} text={txtLink} />;
};
