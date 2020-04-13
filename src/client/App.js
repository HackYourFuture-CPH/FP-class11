import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoaderAnimation from './components/loader-animation/loader-animation.component';
import LoginPage from './containers/login-page/login-page.component';
import ForgotPassword from './containers/forgot-password/forgot-password.component';
import Dashboard from './containers/dashboard-page/dashboard-page.component';
import Page404 from './containers/404-page/404-page.component';
import Firebase, { FirebaseContext } from './firebase/index';
import { getTokenWithHeaders } from './firebase/getTokenWithHeaders';
import UserRoleContext from './helpers/UserRoleContext';

import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';

function App() {
  const [userState, setUserState] = useState(null);
  const [userFetched, setUserFetched] = useState(false);
  const [userRole, setUserRole] = useState('');

  const fetchRole = async () => {
    const headers = await getTokenWithHeaders();
    const role = await fetch('/api/users/role', {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setUserRole(role[0].name);
  };

  useEffect(() => {
    Firebase.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserState(user);
        fetchRole();
      } else {
        setUserState(null);
      }
      setUserFetched(true);
    });
  }, []);

  if (!userFetched) return <LoaderAnimation />;

  return (
    <FirebaseContext.Provider value={userState}>
      <UserRoleContext.Provider value={userRole}>
        <Router>
          <Switch>
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PublicRoute component={Page404} />
          </Switch>
        </Router>
      </UserRoleContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default App;
