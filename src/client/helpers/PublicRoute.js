import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component, authenticated }) {
  return (
    <Route
      render={() =>
        !authenticated ? <Component /> : <Redirect to="/dashboard" />
      }
    />
  );
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default PublicRoute;
