export const RECEIVE_USERS = "RECEIVE_TWEETS";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  };
};
