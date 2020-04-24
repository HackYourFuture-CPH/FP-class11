import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FirebaseConsumer } from '../firebase/index';

function PrivateRoute({ component: Component, ...rest }) {
  const location = useLocation();
  return (
    <FirebaseConsumer>
      {(value) => (
        <Route
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
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
