let defaultState = {
  user: {},
};

const LoginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
