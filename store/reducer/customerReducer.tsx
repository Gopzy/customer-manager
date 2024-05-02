import { FILTER_ALL } from "../../constants";
import { initialReducerType, reducerPayloadType } from "../../types/types";
import {
  ADD_SALES_RECORD,
  DELETE_SALES_RECORD,
  EDIT_SALES_RECORD,
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
  SET_FILTER,
} from "../action/actionType";

const initialState: initialReducerType = {
  customerData: [],
  filteredData: [],
  customerData_error: null,
};
// Function for delete a specific sales record based on customerId and salesId
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

// Function for edit an existing sales record  using customerId and salesId
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

// Function for add a sales record  using customerId and salesId
const addSalesRecord = (state, payload) => {
  const { customerId, status, name } = payload;

  const customerIndex = state.customerData.findIndex(
    ({ id }) => id === customerId
  );

  // generating a random salesId and attaching with the new record
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
// Function for filter the customer data based on the filter criteria (status)
const setFilter = (state, payload) => {
  const { customerData } = state;
  const { filterCriteria } = payload;

  const filteredData =
    filterCriteria !== FILTER_ALL
      ? customerData.filter(({ status }) => status === filterCriteria)
      : customerData;

  return {
    ...state,
    filteredData: filteredData,
  };
};

const customerReducer = (
  state = initialState,
  { type, payload }: reducerPayloadType
) => {
  switch (type) {
    case GET_CUSTOMER_REQUEST:
      return {
        ...state,
        customerData: [],
      };
    case GET_CUSTOMER_SUCCESS:
      return {
        ...state,
        customerData: payload,
      };
    case GET_CUSTOMER_FAILED:
      return {
        ...state,
        customerData_error: payload,
      };

    case DELETE_SALES_RECORD:
      return deletSalesRecord(state, payload);

    case ADD_SALES_RECORD:
      return addSalesRecord(state, payload);

    case EDIT_SALES_RECORD:
      return editSalesRecord(state, payload);

    case SET_FILTER:
      return setFilter(state, payload);

    default:
      return state;
  }
};

export default customerReducer;
