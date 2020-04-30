import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoaderAnimation from './components/loader-animation/loader-animation.component';
import LoginPage from './containers/login-page/login-page.component';
import ForgotPassword from './containers/forgot-password/forgot-password.component';
import Dashboard from './containers/dashboard-page/dashboard-page.container';
import AddBatchContainer from './containers/add-batch-page/add-batch-page.container';
import Page404 from './containers/404-page/404-page.component';
import Firebase, { FirebaseContext } from './firebase/index';
import ChartDetailsSmartData from './containers/chart-detail-page/chart-detail-page.container';
import { getTokenWithHeaders } from './firebase/getTokenWithHeaders';
import UserRoleContext from './helpers/UserRoleContext';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
import signInAsDefaultUser from './helpers/signInAsDefaultUser';
import BatchDetailPage from './containers/view-batch-detail-page/view-batch-detail-page.component';

function App() {
  const [userState, setUserState] = useState(null);
  const [userFetched, setUserFetched] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [userName, setUserName] = useState('');

  const fetchNameRole = async () => {
    const headers = await getTokenWithHeaders();

    const role = await fetch('/api/users/role', {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setUserRole(role[0].name);

    const name = await fetch('/api/users/name', {
      method: 'GET',
      headers,
    }).then((data) => data.json());
    setUserName(name[0].name);
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      signInAsDefaultUser();
    }

    Firebase.getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUserState(user);
        fetchNameRole();
      } else {
        setUserState(null);
      }
      setUserFetched(true);
    });
  }, []);

  if (!userFetched) return <LoaderAnimation />;

  return (
    <FirebaseContext.Provider value={userState}>
      <UserRoleContext.Provider value={{ userRole, userName }}>
        <Router>
          <Switch>
            <PublicRoute
              exact
              path="/forgot-password"
              component={ForgotPassword}
            />
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            {/* This one should be changed to private route, but can't get 
                the useParams() hook to work with our PrivateRoute component */}
            <Route exact path="/batch-details/:id">
              <BatchDetailPage />
            </Route>
            <PrivateRoute path="/add-batch" component={AddBatchContainer} />
            <PrivateRoute
              path="/chart-details/:materialSlug?"
              component={ChartDetailsSmartData}
            />

            <PrivateRoute component={Page404} />
          </Switch>
        </Router>
      </UserRoleContext.Provider>
    </FirebaseContext.Provider>
  );
}

export default App;
