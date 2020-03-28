import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './containers/login-page/login-page';
import ForgotPassword from './containers/forgot-password/forgot-password';
import Dashboard from './containers/dashboard-page/dashboard-page';
import Firebase, { FirebaseContext } from './firebase/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <FirebaseContext.Provider value={Firebase.init()}>
            <LoginPage />
          </FirebaseContext.Provider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
