import {
  ADD_SALES_RECORD,
  DELETE_SALES_RECORD,
  EDIT_SALES_RECORD,
  GET_CUSTOMER,
  GET_CUSTOMER_SUCCESS,
  SET_FILTER,
} from "./actionType";

const getCustomer = (success?: Function, failed?: Function) => ({
  type: GET_CUSTOMER,
  success,
  failed,
});

const deleteSales = (payload: {}, success?: Function, failed?: Function) => ({
  type: DELETE_SALES_RECORD,
  payload,
  success,
  failed,
});

const addSales = (payload: {}, success?: Function, failed?: Function) => ({
  type: ADD_SALES_RECORD,
  payload,
  success,
  failed,
});

const editSales = (payload: {}, success?: Function, failed?: Function) => ({
  type: EDIT_SALES_RECORD,
  payload,
  success,
  failed,
});

const setFilter = (payload: {}, success?: Function, failed?: Function) => ({
  type: SET_FILTER,
  payload,
  success,
  failed,
});

export { getCustomer, deleteSales, addSales, editSales, setFilter };
