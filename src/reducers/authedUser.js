import { SET_AUTHED_USER } from "../actions/authedUsers";

const authedUsers = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        ...action.id
      };
    default:
      return state;
  }
};

export default authedUsers;
