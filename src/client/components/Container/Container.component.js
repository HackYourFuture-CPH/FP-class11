import React from 'react';
import './Container.style.css';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';

import InputLogin from '../InputLogin/InputLogin.component';
import Button from '../Button/Button.component';
import Logo from '../Logo/Logo.component';
import Link from '../Link/Link.component';

import imageFile from '../../assets/images/logo.png';

export default function Container({ title }) {
  return (
    <div className="container">
      <Logo srcPath={imageFile} altText="Seasony" />
      <h2>{title}</h2>
      <form>
        <InputLogin
          type={text('Input Type', 'email')}
          placeholder={text('Input Placeholder Text', 'Email')}
          onChange={action('email value changed')}
          icon={faUser}
        />
        <InputLogin
          type={text('Input Type', 'password')}
          placeholder={text('Input Placeholder Text', 'Password')}
          onChange={action('password value changed')}
          icon={faKey}
        />
        <div className="right">
          <Link
            href={text('Link URL', '/forgotpassword')}
            text={text('Link text', 'Forgot password')}
          />
        </div>
        <Button
          onClick={action('clicked')}
          text={text('Button Text', 'Login')}
        />
      </form>
    </div>
  );
}

Container.propTypes = {
  title: PropTypes.string.isRequired,
};
