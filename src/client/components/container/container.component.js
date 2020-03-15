import React from 'react';
import './container.style.css';
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

export default function Container({ title, error, handleChange, loginFunc }) {
  return (
    <div className="container">
      <Logo srcPath={imageFile} altText="Seasony" />
      <h2>{title}</h2>
      <form>
        {error && (
          <Notification text="This is error message for wrong email address." />
        )}
        {error ? (
          <InputLogin
            type="email"
            placeholder="Email"
            onChange={handleChange}
            icon={faExclamationCircle}
            error
          />
        ) : (
          <InputLogin
            type="email"
            placeholder="Email"
            onChange={handleChange}
            icon={faUser}
          />
        )}
        <InputLogin
          type="password"
          placeholder="Password"
          onChange={handleChange}
          icon={faKey}
        />
        <div className="right">
          <Link href="/forgotpassword" text="Forgot password" />
        </div>
        <Button onClick={loginFunc} text="Login" />
      </form>
    </div>
  );
}

Container.defaultProps = {
  error: false,
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  error: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  loginFunc: PropTypes.func.isRequired,
};
