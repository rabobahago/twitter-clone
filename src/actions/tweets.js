import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEETS = "TOGGLE_TWEETS";
export const ADD_TWEETS = "ADD_TWEETS";
export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};
export const addTweets = (tweet) => {
  return {
    type: ADD_TWEETS,
    tweet
  };
};
export const toggleTweets = ({ id, authedUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEETS,
    id,
    authedUser,
    hasLiked
  };
};

export const handleToggleTweets = (info) => {
  return (dispatch) => {
    dispatch(toggleTweets(info));
    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handleToggleTweet", e);
      dispatch(toggleTweets(info));
      alert("There was an error liking the tweet. Try again.");
    });
  };
};
export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then((tweet) => dispatch(addTweets(tweet)))
      .then(() => dispatch(hideLoading()));
  };
};
