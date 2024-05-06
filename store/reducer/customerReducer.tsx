import { initialReducerType, reducerPayloadType } from "../../types/types";
import {
  addSalesRecord,
  deletSalesRecord,
  editSalesRecord,
  setFilter,
} from "../../helper";
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
