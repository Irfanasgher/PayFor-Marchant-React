let defaultState = {
  clients: [],
};

const ClientReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CLIENTS_LIST_SUCCESSFULLY":
      return {
        ...state,
        clients: action.payload,
      };

    case "GET_CLIENTS_DETAIL_SUCCESSFULLY":
      return {
        ...state,
        clientDetail: action.payload,
      };

    default:
      return state;
  }
};

export default ClientReducer;
