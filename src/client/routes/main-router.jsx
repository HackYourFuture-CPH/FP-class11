import React from "react";

import { Route, withRouter } from "react-router-dom";

import Home from "./../Home";

const MainRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/" component={Home} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
