import React from 'react';
import './login.style.css';
import PropTypes from 'prop-types';
import {
  faUser,
  faKey,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import InputLogin from '../input-login/input-login.component';
import Button from '../button/button.component';
import Logo from '../logo/logo.component';
import Link from '../link/link.component';
import Notification from '../notification/notification.component';

import imageFile from '../../assets/images/logo.png';

export default function Login({
  title,
  errorNotifications,
  errorMessages,
  handleChange,
  loginFunc,
}) {
  return (
    <div className="container">
      <Logo srcPath={imageFile} altText="Seasony" />
      <h2>{title}</h2>
      <form>
        <div className="error-notification">
          {errorNotifications && <Notification text={errorMessages} />}
        </div>
        <InputLogin
          type="email"
          placeholder="Email"
          onChange={handleChange}
          icon={
            errorNotifications === 'auth/invalid-email'
              ? faExclamationCircle
              : faUser
          }
          error={errorNotifications === 'auth/invalid-email'}
        />
        <InputLogin
          type="password"
          placeholder="Password"
          onChange={handleChange}
          icon={
            errorNotifications === 'auth/wrong-password'
              ? faExclamationCircle
              : faKey
          }
          error={errorNotifications === 'auth/wrong-password'}
        />
        <div className="right-link">
          <Link href="/forgot-password" text="Forgot password" />
        </div>
        <Button type="primary" size="large" onClick={loginFunc}>
          Login
        </Button>
      </form>
    </div>
  );
}

Login.defaultProps = {
  errorNotifications: null,
  errorMessages: '',
};

Login.propTypes = {
  title: PropTypes.string.isRequired,
  errorNotifications: PropTypes.string,
  errorMessages: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  loginFunc: PropTypes.func.isRequired,
};
