import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FirebaseConsumer } from '../firebase/index';

function PublicRoute({ component: Component }) {
  const location = useLocation();
  return (
    <FirebaseConsumer>
      {(value) => (
        <Route
          render={() =>
            !value ? (
              <Component />
            ) : (
              <Redirect
                to={{ pathname: '/dashboard', state: { from: location } }}
              />
            )
          }
        />
      )}
    </FirebaseConsumer>
  );
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
