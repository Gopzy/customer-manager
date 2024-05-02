import {
  addSalesType,
  deleteSalesType,
  editSalesType,
  setFilterType,
} from "../../types/types";
import {
  ADD_SALES_RECORD,
  DELETE_SALES_RECORD,
  EDIT_SALES_RECORD,
  GET_CUSTOMER,
  SET_FILTER,
} from "./actionType";

const getCustomer = (success?: Function, failed?: Function) => ({
  type: GET_CUSTOMER,
  success,
  failed,
});

const deleteSales = (
  payload: deleteSalesType,
  success?: Function,
  failed?: Function
) => ({
  type: DELETE_SALES_RECORD,
  payload,
  success,
  failed,
});

const addSales = (
  payload: addSalesType,
  success?: Function,
  failed?: Function
) => ({
  type: ADD_SALES_RECORD,
  payload,
  success,
  failed,
});

const editSales = (
  payload: editSalesType,
  success?: Function,
  failed?: Function
) => ({
  type: EDIT_SALES_RECORD,
  payload,
  success,
  failed,
});

const setFilter = (
  payload: setFilterType,
  success?: Function,
  failed?: Function
) => ({
  type: SET_FILTER,
  payload,
  success,
  failed,
});

export { getCustomer, deleteSales, addSales, editSales, setFilter };
