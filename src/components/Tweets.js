import React from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

const Tweet = (props) => {
  return (
    <div className="tweet">
      <h4>Hello</h4>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, tweets }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweets[tweet.replyingTo];
  return {
    authedUser,
    tweet: formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
  };
};

export default connect(mapStateToProps)(Tweet);
