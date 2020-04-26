import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './login-page.style.css';
import Login from '../../components/login/login.component';
import Firebase, { FirebaseContext } from '../../firebase/index';

function LoginPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorNotifications, setErrorNotifications] = useState(null);
  const user = useContext(FirebaseContext);

  useEffect(() => {
    if (user) history.replace('/list-batches');
  });

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
            } else history.replace('/list-batches');
          }
        }}
      />
    </main>
  );
}

export default LoginPage;
