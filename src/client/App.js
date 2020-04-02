import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DashboardPage from './containers/dashboard-page/dashboard-page.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
