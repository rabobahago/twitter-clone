import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return <div>{loading === true ? null : <Dashboard />}</div>;
};

const mapStateToProps = ({ authedUsers }) => {
  return { loading: authedUsers === null };
};

export default connect(mapStateToProps)(App);
