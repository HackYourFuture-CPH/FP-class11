import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

function PublicRoute({ component: Component }) {
  return <Route render={() => <Component />} />;
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
