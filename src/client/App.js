import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainRouter from "./routes/main-router";

class App extends Component {
  render() {
    return <MainRouter />;
  }
}

export default withRouter(App);
