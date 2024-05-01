import customerObj from "../../customer";
import {
  DELETE_SALES_RECORD,
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
} from "../action/actionType";

const initialState = {
  customerData: [...customerObj],
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

    default:
      return state;
  }
};

export default customerReducer;
