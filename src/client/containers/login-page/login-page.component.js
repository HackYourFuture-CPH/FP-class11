import React, { useState } from 'react';
import Firebase from '../../firebase/index';

import './login-page.style.css';

import Login from '../../components/login/login.component';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorNotifications, setErrorNotifications] = useState(null);

  return (
    <main>
      <Login
        title="Login"
        errorNotifications={errorNotifications}
        errorMessages={errorMessage}
        handleChange={(event) => {
          if (event.target.type === 'email') setEmail(event.target.value);
          if (event.target.type === 'password') setPassword(event.target.value);
        }}
        loginFunc={async (event) => {
          event.preventDefault();
          if (email && password) {
            const { err } = await Firebase.signInEmailAndPassword(
              email,
              password,
            );
            if (err) {
              setErrorMessage(err.message);
              setErrorNotifications(err.code);
            }
          }
        }}
      />
    </main>
  );
}

export default LoginPage;
