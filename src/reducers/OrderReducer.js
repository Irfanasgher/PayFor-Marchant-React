let defaultState = {
  orders: [],
};

const OrderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_ORDER_LIST_SUCCESSFULLY":
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default OrderReducer;
