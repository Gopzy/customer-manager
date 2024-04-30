import customerObj from "../../customer";
import {
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_SUCCESS,
} from "../action/actionType";

const initialState = {
  // customerData: [],
  customerData: customerObj,
  customerData_error: null,
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
    default:
      return state;
  }
};

export default customerReducer;
