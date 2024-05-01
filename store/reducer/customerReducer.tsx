import customerObj from "../../customer";
import {
  ADD_SALES_RECORD,
  DELETE_SALES_RECORD,
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
} from "../action/actionType";

const initialState = {
  customerData: [],
  customerData_error: null,
};

const handelDeletSalesRecord = (state, payload) => {
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

const handelAddSalesRecord = (state, payload) => {
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
      return handelDeletSalesRecord(state, action.payload);

    case ADD_SALES_RECORD:
      return handelAddSalesRecord(state, action.payload);

    default:
      return state;
  }
};

export default customerReducer;
