import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoginPage from './containers/login-page/login-page.component';
import ForgotPassword from './containers/forgot-password/forgot-password.component';
import Dashboard from './containers/dashboard-page/dashboard-page.component';
import Firebase, { FirebaseContext } from './firebase/index';

import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';

function App() {
  const [userState, setUserState] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    Firebase.init();
    Firebase.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserState(user);
        setAuth(true);
      } else {
        setUserState(null);
        setAuth(false);
      }
    });
  }, []);

  return (
    <FirebaseContext.Provider value={userState}>
      <Router>
        <Switch>
          <PublicRoute
            exact
            path="/forgot-password"
            component={ForgotPassword}
            authenticated={auth}
          />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            authenticated={auth}
          />
          <PublicRoute
            exact
            path="/"
            component={LoginPage}
            authenticated={auth}
          />
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
