const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.group("The action", action);
  const returnValue = next(action);
  console.log("The new state", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
