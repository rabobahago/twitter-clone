import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Dashboard from "./Dashboard";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {loading === true ? null : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} />
            </div>
          )}
        </div>
      </Fragment>
    </Router>
  );
};
// 8xf0y6ziyjabvozdd253nd
const mapStateToProps = ({ authedUser }) => {
  return { loading: authedUser === null };
};

export default connect(mapStateToProps)(App);
