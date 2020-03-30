import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './login-page.css';
import '../../components/login/login.style.css';

import Login from '../../components/login/login.component';

import firebase from '../../firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorNotifications, setErrorNotifications] = useState(null);

  const history = useHistory();
  const [userState, setUserState] = useState(null);
  useEffect(() => {
    firebase.getAuth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
        setUserState(user);
        history.push('/dashboard');
      } else {
        setUserState(null);
      }
    });
  }, []);
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
            const { err } = await firebase.signInEmailAndPassword(
              email,
              password,
            );
            if (err) {
              setErrorMessage(err.message);
              setErrorNotifications(err.code);
            } else history.push('/dashboard');
          }
        }}
      />
    </main>
  );
}

export default LoginPage;
