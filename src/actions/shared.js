import { getInitialData } from "../utils/api";
import { receiveTweets } from "../actions/tweets";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUsers";

const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then((tweets, users) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
