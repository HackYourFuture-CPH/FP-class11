import React from 'react';
import InputLogin from './input-login.component';
import { action } from '@storybook/addon-actions';
import {
  faUser,
  faKey,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'InputLogin',
  component: InputLogin,
  decorators: [withKnobs],
};

const types = {
  Email: 'email',
  Password: 'password',
};

const icons = {
  User: faUser,
  Password: faKey,
  Error: faExclamationCircle,
};

export const Email = () => {
  const type = select('Input Type', types, 'email');
  const onChange = action('value changed');
  const error = boolean('isError', false);

  return (
    <InputLogin
      type={type}
      placeholder={
        (type === types.Email && 'Email') ||
        (type === types.Password && 'Password')
      }
      onChange={onChange}
      icon={
        (error && icons.Error) ||
        (type === types.Email && icons.User) ||
        (type === types.Password && icons.Password)
      }
      error={error}
    />
  );
};
