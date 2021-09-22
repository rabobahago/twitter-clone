import { combineReducers } from "redux";
import users from "../reducers/users";
import tweets from "../reducers/tweets";
import authedUsers from "../reducers/authedUsers";
export default combineReducers({
  authedUsers,
  users,
  tweets
});
