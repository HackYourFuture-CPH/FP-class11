import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './containers/login-page/login-page';
import ForgotPassword from './containers/forgot-password/forgot-password';
import Dashboard from './containers/dashboard-page/dashboard-page';
import Firebase, { FirebaseContext } from './firebase/index';

function App() {
  return (
    <FirebaseContext.Provider value={Firebase.init()}>
      <Router>
        <Switch>
          <Route exact path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
