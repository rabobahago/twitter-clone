import { saveLikeToggle } from "../utils/api";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEETS = "TOGGLE_TWEETS";
export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
};

export const toggleTweets = (id, authedUser, hasLiked) => {
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
