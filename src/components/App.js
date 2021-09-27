import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
//import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
//import Dashboard from "./Dashboard";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      <LoadingBar />
      {loading === true ? null : (
        <TweetPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
      )}
    </div>
  );
};
// 8xf0y6ziyjabvozdd253nd
const mapStateToProps = ({ authedUser }) => {
  return { loading: authedUser === null };
};

export default connect(mapStateToProps)(App);
