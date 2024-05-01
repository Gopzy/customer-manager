import {
  DELETE_SALES_RECORD,
  GET_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
} from "./actionType";

const getCustomer = (success?: Function, failed?: Function) => ({
  type: GET_CUSTOMER_SUCCESS,
  success,
  failed,
});

const deleteSales = (payload: {}, success?: Function, failed?: Function) => ({
  type: DELETE_SALES_RECORD,
  payload,
  success,
  failed,
});

export { getCustomer, deleteSales };
