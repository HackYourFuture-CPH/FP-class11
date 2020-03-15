import React from 'react';
import InputLogin from './input-login.component';
import { action } from '@storybook/addon-actions';
import {
  faUser,
  faKey,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

export default {
  title: 'InputLogin',
  component: InputLogin,
  decorators: [withKnobs],
};

const icons = {
  User: faUser,
  Password: faKey,
  Error: faExclamationCircle,
};

export const Email = () => {
  const type = text('Input Type', 'email');
  const placeholder = text('Input Placeholder Text', 'Email');
  const onChange = action('value changed');
  const error = boolean('isError', false);
  const icon = select('Icon', icons, faUser);
  return (
    <InputLogin
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      icon={icon}
      error={error}
    />
  );
};
