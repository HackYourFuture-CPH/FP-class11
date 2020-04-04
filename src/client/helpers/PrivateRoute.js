import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ component: Component, authenticated }) {
  const location = useLocation();
  return (
    <Route
      render={() =>
        authenticated ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;
