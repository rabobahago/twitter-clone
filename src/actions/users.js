export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveUsers = (users) => {
  //console.log(users);
  return {
    type: RECEIVE_USERS,
    users
  };
};
