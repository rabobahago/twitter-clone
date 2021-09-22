import { combineReducers } from "redux";
import users from "./users";
import tweets from "./tweets";
import authedUsers from "./authedUser";
export default combineReducers({
  authedUsers,
  users,
  tweets
});
