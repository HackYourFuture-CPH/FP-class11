import React, { useState } from 'react';
import './forgot-password.css';

import Logo from '../../components/logo/logo.component';
import InputLogin from '../../components/input-login/input-login.component';
import Button from '../../components/button/button.component';
import Notification from '../../components/notification/notification.component';

import { faUser, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import imageFile from '../../assets/images/logo.png';

import firebase from '../../firebase/auth';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorNotifications, setErrorNotifications] = useState(null);

  return (
    <main>
      <div className="container">
        <Logo srcPath={imageFile} altText="Seasony" />
        <h2>Forgot password</h2>
        <form>
          <div className="error-notification">
            {errorNotifications && <Notification text={errorMessage} />}
          </div>
          <InputLogin
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            icon={errorNotifications ? faExclamationCircle : faUser}
            error={errorNotifications}
          />
          <Button
            type="primary"
            size="large"
            onClick={async (event) => {
              event.preventDefault();
              if (email) {
                const { err } = await firebase.doPasswordReset(email);
                if (err) {
                  setErrorMessage(err.message);
                  setErrorNotifications(err.code);
                }
              }
            }}
          >
            Reset password
          </Button>
        </form>
      </div>
    </main>
  );
}

export default ForgotPassword;
