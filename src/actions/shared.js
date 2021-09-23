import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUsers";

const AUTHED_ID = "tylermcginnis";
export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData().then((tweets, users) => {
      //console.log(tweets, users);
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
};
