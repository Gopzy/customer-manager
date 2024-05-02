import { FILTER_ALL } from "../../constants";
import {
  ADD_SALES_RECORD,
  DELETE_SALES_RECORD,
  EDIT_SALES_RECORD,
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  SET_FILTER,
} from "../action/actionType";

const initialState = {
  customerData: [],
  filteredData: [],
  customerData_error: null,
};

const deletSalesRecord = (state, payload) => {
  const { customerId, sId } = payload;

  const customerIndex = state.customerData.findIndex(
    (customer) => customer.id === customerId
  );

  if (customerIndex !== -1) {
    const salesInfoIndex = state.customerData[
      customerIndex
    ].salesInfo.findIndex((sale) => sale.salesId === sId);

    if (salesInfoIndex !== -1) {
      const updatedCustomerData = [...state.customerData];

      updatedCustomerData[customerIndex] = {
        ...updatedCustomerData[customerIndex],
        salesInfo: [
          ...updatedCustomerData[customerIndex].salesInfo.slice(
            0,
            salesInfoIndex
          ),
          ...updatedCustomerData[customerIndex].salesInfo.slice(
            salesInfoIndex + 1
          ),
        ],
      };

      return {
        ...state,
        customerData: updatedCustomerData,
      };
    }
  }
  return state;
};

const editSalesRecord = (state, payload) => {
  const { customerId, sId, status, name } = payload;

  const customerIndex = state.customerData.findIndex(
    (customer) => customer.id === customerId
  );

  if (customerIndex !== -1) {
    const salesInfoIndex = state.customerData[
      customerIndex
    ].salesInfo.findIndex((sale) => sale.salesId === sId);

    if (salesInfoIndex !== -1) {
      const updatedCustomerData = [...state.customerData];
      updatedCustomerData[customerIndex] = {
        ...updatedCustomerData[customerIndex],
        salesInfo: updatedCustomerData[customerIndex].salesInfo.map((sale) =>
          sale.salesId === sId ? { ...sale, status, name } : sale
        ),
      };

      return {
        ...state,
        customerData: updatedCustomerData,
      };
    }
  }

  return state;
};

const addSalesRecord = (state, payload) => {
  const { customerId, status, name } = payload;

  const customerIndex = state.customerData.findIndex(
    ({ id }) => id === customerId
  );

  if (customerIndex !== -1) {
    const salesId = (Math.floor(Math.random() * 1000) + 1).toString();

    const newSalesRecord = {
      salesId,
      status,
      name,
    };

    const updatedCustomerData = [...state.customerData];
    updatedCustomerData[customerIndex] = {
      ...updatedCustomerData[customerIndex],
      salesInfo: [
        ...updatedCustomerData[customerIndex].salesInfo,
        newSalesRecord,
      ],
    };

    return {
      ...state,
      customerData: updatedCustomerData,
    };
  }

  return state;
};

const setFilter = (state, payload) => {
  const { customerData } = state;
  const { filterCriteria } = payload;

  // Filter the customer data based on the filter criteria (status)
  const filteredData =
    filterCriteria !== FILTER_ALL
      ? customerData.filter(({ status }) => status === filterCriteria)
      : customerData;

  console.log("set filter ::::", filterCriteria, filteredData);
  return {
    ...state,
    filteredData: filteredData,
  };
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_REQUEST:
      return {
        ...state,
        customerData: [],
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerData: action.payload,
      };
    case GET_CUSTOMER_FAILED:
      return {
        ...state,
        customerData_error: action.payload,
      };

    case DELETE_SALES_RECORD:
      return deletSalesRecord(state, action.payload);

    case ADD_SALES_RECORD:
      return addSalesRecord(state, action.payload);

    case EDIT_SALES_RECORD:
      return editSalesRecord(state, action.payload);

    case SET_FILTER:
      return setFilter(state, action.payload);

    default:
      return state;
  }
};

export default customerReducer;
