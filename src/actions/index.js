import config from "../config/config";
import axios from "axios";

//-----------------Signup---------------------------//

export const signupAction = (user) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.baseURL}company`, user)
      .then((res) => {
        console.log("res from line 11", res);
        return dispatch({
          type: "SIGN_UP_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        alert(err?.response?.data?.message);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------Login---------------------------//

export const loginAction = (user) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.baseURL}merchant/login`, user)
      .then((res) => {
        return dispatch({
          type: "LOG_IN_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        alert(err?.response?.data?.message);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Client---------------------------//

export const GetAllClient = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}company`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_CLIENTS_LIST_SUCCESSFULLY",
          payload: data?.company,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET Client By ID---------------------------//

export const GetClientDetailByID = (clientID) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}company/${clientID}`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_CLIENTS_DETAIL_SUCCESSFULLY",
          payload: data?.company,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Customer---------------------------//

export const GetAllCustomer = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}user/admin/getallcustomers`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_CUSTOMER_LIST_SUCCESSFULLY",
          payload: data?.users,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET Customer By store ID---------------------------//

export const GetAllCustomerByStoreID = (storeID) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}user/admin/getallcustomers/${storeID}`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_CUSTOMER_LIST_SUCCESSFULLY",
          payload: data?.users,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ALL Order---------------------------//

export const GetAllOrder = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}order-detail/admin/getAllOrders`)
      .then(({ data }) => {
        console.log("dataaaaaaa in line 72 of action", data);
        return dispatch({
          type: "GET_ORDER_LIST_SUCCESSFULLY",
          payload: data?.orders,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET Customer By company ID---------------------------//

export const GetAllOrderByStoreID = (storeID) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.baseURL}order-detail/admin/getAllOrderByCompanyId/${storeID}`
      )
      .then(({ data }) => {
        console.log("line 157 in action", data);
        return dispatch({
          type: "GET_ORDER_LIST_SUCCESSFULLY",
          payload: data?.orders,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//------------------------------------refundRequest---------------------------//

export const refundRequest = (payload) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}item-details/admin/refundRequest/${payload}`)
      .then(() => {
        alert("Request Send");
        return dispatch(GetAllOrder());
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//------------------------------------END----------------------------------------//

//-----------------GET ProgressChart---------------------------//

export const GetProgressChart = () => {
  return async function (dispatch) {
    let endpoints = [
      `${config.baseURL}user/dashboard/getallcustomersNumber`,
      `${config.baseURL}company/dashboard/getAllClientsNumber`,
      `${config.baseURL}order-detail/dashboard/getAllOrderNumber`,
      `${config.baseURL}item-details/admin/getRefundNumber`,
    ];
    return await axios
      .all(endpoints.map((promise) => axios.get(promise)))
      .then(
        axios.spread((customerD, clientD, orderD, refundD) => {
          var customer = customerD.data;
          var client = clientD.data;
          var order = orderD.data;
          var refund = refundD.data;
          let data = { customer, client, order, refund };
          return dispatch({
            type: "GET_PROGRESS_CHARTS",
            payload: data,
          });
        })
      )
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET ProgressChart by store id---------------------------//

export const GetMerchantProgressChart = (storeID) => {
  return async function (dispatch) {
    let endpoints = [
      `${config.baseURL}user/dashboard/getallcustomersNumberByMerchant/${storeID}`,
      `${config.baseURL}order-detail/dashboard/getAllOrderNumberByMerchant/${storeID}`,
      `${config.baseURL}order-detail/dashboard/getAllCompletedOrderNumberByMerchant/${storeID}`,
      `${config.baseURL}item-details/admin/getRefundNumberByMerchant/${storeID}`,
    ];
    return await axios
      .all(endpoints.map((promise) => axios.get(promise)))
      .then(
        axios.spread((customerD, orderD, completedD, refundD) => {
          var customer = customerD.data;
          var order = orderD.data;
          var completed = completedD.data;
          var refund = refundD.data;
          let data = { customer, order, completed, refund };
          return dispatch({
            type: "GET_PROGRESS_CHARTS",
            payload: data,
          });
        })
      )
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET DonutChart---------------------------//

export const GetDonutChart = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}order-detail/dashboard/getOrderStatus`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_DONUT_CHARTS",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET DonutChart by store id---------------------------//

export const GetMerchantDonutChart = (storeID) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.baseURL}order-detail/dashboard/getOrderStatusByMerchant/${storeID}`
      )
      .then(({ data }) => {
        return dispatch({
          type: "GET_DONUT_CHARTS",
          payload: data.data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET DayGraph---------------------------//

export const GetOrderByDayGraph = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}order-detail/admin/getAllOrderByDayGraph`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_DAY_GRAPH_CHARTS",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET DayGraph by store id---------------------------//

export const GetMerchantOrderByDayGraph = (storeID) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.baseURL}order-detail/getAllOrderByDayGraphMerchant/${storeID}`
      )
      .then(({ data }) => {
        return dispatch({
          type: "GET_DAY_GRAPH_CHARTS",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET DayGraph---------------------------//

export const GetMonthlyGraph = () => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}user/dashboard/getAllCustomerMonthlyGraph`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_MONTHLY_GRAPH_CHARTS",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

export const GetMerchantMonthlyGraph = (storeID) => {
  return async function (dispatch) {
    return await axios
      .get(
        `${config.baseURL}order-detail/admin/getAllOrderMonthlyGraphByMerchant/${storeID}`
      )
      .then(({ data }) => {
        return dispatch({
          type: "GET_MONTHLY_GRAPH_CHARTS",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------GET DayGraph---------------------------//

export const GetEmployeeByMerchantId = (id) => {
  return async function (dispatch) {
    return await axios
      .get(`${config.baseURL}employee/getByMerchantId/${id}`)
      .then(({ data }) => {
        return dispatch({
          type: "GET_EMPLOYEE_BY_MERCHANT_ID",
          payload: data,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------Generate Instore Link---------------------------//

export const GenerateInstoreLink = (data) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.baseURL}instore-link`, data)
      .then((res) => {
        return dispatch({
          type: "GENERATE_INSTORE_LINK",
          payload: res,
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//

//-----------------Generate Instore Link---------------------------//

export const CreateEmployee = (data, id) => {
  return async function (dispatch) {
    return await axios
      .post(`${config.baseURL}employee`, data)
      .then(() => {
        dispatch(GetClientDetailByID(id));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

//-------------------------------- END -----------------------------------------//
