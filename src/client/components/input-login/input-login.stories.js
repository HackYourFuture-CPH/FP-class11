import React from 'react';
import InputLogin from './input-login.component';
import { action } from '@storybook/addon-actions';
import {
  faUser,
  faKey,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'InputLogin',
  component: InputLogin,
  decorators: [withKnobs],
};

export const Email = () => (
  <InputLogin
    type={text('Input Type', 'email')}
    placeholder={text('Input Placeholder Text', 'Email')}
    onChange={action('email value changed')}
    icon={faUser}
  />
);

export const Password = () => (
  <InputLogin
    type={text('Input Type', 'password')}
    placeholder={text('Input Placeholder Text', 'Password')}
    onChange={action('password value changed')}
    icon={faKey}
  />
);

export const Error = () => (
  <InputLogin
    type={text('Input Type', 'email')}
    placeholder={text('Input Placeholder Text', 'Email')}
    onChange={action('password value changed')}
    icon={faExclamationCircle}
    error
  />
);
