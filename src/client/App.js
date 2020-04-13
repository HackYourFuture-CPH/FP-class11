import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import LoaderAnimation from './components/loader-animation/loader-animation.component';
import LoginPage from './containers/login-page/login-page.component';
import ForgotPassword from './containers/forgot-password/forgot-password.component';
import Dashboard from './containers/dashboard-page/dashboard-page.component';
import Page404 from './containers/404-page/404-page.component';
import Firebase, { FirebaseContext } from './firebase/index';

import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';

function App() {
  const [userState, setUserState] = useState(null);
  const [userFetched, setUserFetched] = useState(false);

  useEffect(() => {
    Firebase.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(null);
      }
      setUserFetched(true);
    });
  }, []);

  if (!userFetched) return <LoaderAnimation />;

  return (
    <FirebaseContext.Provider value={userState}>
      <Router>
        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PublicRoute
            exact
            path="/forgot-password"
            component={ForgotPassword}
          />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          {userState === null && <Redirect to="/" />}
          {userState && <PrivateRoute component={Page404} />}
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
