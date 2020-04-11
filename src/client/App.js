import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoginPage from './containers/login-page/login-page.component';
import ForgotPassword from './containers/forgot-password/forgot-password.component';
import Dashboard from './containers/dashboard-page/dashboard-page.component';
import CropDetailPage from './containers/crop-detail-page/crop-detail-page.component';
import AddCropPage from './containers/add-crop-page/add-crop-page.component';
import Page404 from './containers/404-page/404-page.component';
import Firebase, { FirebaseContext } from './firebase/index';

import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';

function App() {
  const [userState, setUserState] = useState();

  useEffect(() => {
    Firebase.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(null);
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
          />
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/batch-details"
            component={CropDetailPage}
          />
          <PrivateRoute exact path="/add-batch" component={AddCropPage} />
          <PublicRoute component={Page404} />
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
