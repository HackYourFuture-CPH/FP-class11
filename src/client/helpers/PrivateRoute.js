import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FirebaseConsumer } from '../firebase/index';

function PrivateRoute({ component: Component }) {
  const location = useLocation();
  return (
    <FirebaseConsumer>
      {(value) => (
        <Route
          render={() =>
            value ? (
              <Component />
            ) : (
              <Redirect to={{ pathname: '/', state: { from: location } }} />
            )
          }
        />
      )}
    </FirebaseConsumer>
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
