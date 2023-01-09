const alertReducers = (state, action) => {
  switch (action.type) {
    case "ALERT_TYPE":
      return action.payload;
    case "CLOSE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducers;
