let defaultState = {
  customers: [],
};

const CustomerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_CUSTOMER_LIST_SUCCESSFULLY":
      return {
        ...state,
        customers: action.payload,
      };
    case "GET_EMPLOYEE_BY_MERCHANT_ID":
      return {
        ...state,
        employee: action.payload,
      };
    default:
      return state;
  }
};

export default CustomerReducer;
