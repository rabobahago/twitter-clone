import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <LoadingBar />
      {loading === true ? null : <Dashboard />}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return { loading: authedUser === null };
};

export default connect(mapStateToProps)(App);
