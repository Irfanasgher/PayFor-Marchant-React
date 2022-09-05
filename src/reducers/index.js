import { combineReducers } from "redux";
import ThemeOptions from "./ThemeOptions";
import ClientReducer from "./ClientReducer";
import CustomerReducer from "./CustomerReducer";
import OrderReducer from "./OrderReducer";
import LoginReducer from "./LoginReducer";
import ChartReducer from "./ChartReducer";
const appReducer = combineReducers({
  ThemeOptions,
  ClientReducer,
  CustomerReducer,
  OrderReducer,
  LoginReducer,
  ChartReducer,
});

const rootReducers = (state, action) => {
  if (action.type === "RESET_STORE") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducers;
