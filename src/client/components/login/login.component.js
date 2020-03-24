import React, { useState, useEffect } from 'react';
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
  handleChange,
  loginFunc,
}) {
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if (errorNotifications) {
      if (errorNotifications === 'email')
        setErrorMessage('This is error message for wrong email address');
      else if (errorNotifications === 'password')
        setErrorMessage('This is error message for wrong password.');
      else setErrorMessage('Something went wrong. Try again later.');
    }
  }, [errorNotifications]);
  return (
    <div className="container">
      <Logo srcPath={imageFile} altText="Seasony" />
      <h2>{title}</h2>
      <form>
        <div className="error-notification">
          {errorNotifications && <Notification text={errorMessage} />}
        </div>
        <InputLogin
          type="email"
          placeholder="Email"
          onChange={handleChange}
          icon={errorNotifications === 'email' ? faExclamationCircle : faUser}
          error={errorNotifications === 'email'}
        />
        <InputLogin
          type="password"
          placeholder="Password"
          onChange={handleChange}
          icon={errorNotifications === 'password' ? faExclamationCircle : faKey}
          error={errorNotifications === 'password'}
        />
        <div className="right-link">
          <Link href="/forgotpassword" text="Forgot password" />
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
};

Login.propTypes = {
  title: PropTypes.string.isRequired,
  errorNotifications: PropTypes.oneOf(['email', 'password', 'general', null]),
  handleChange: PropTypes.func.isRequired,
  loginFunc: PropTypes.func.isRequired,
};
