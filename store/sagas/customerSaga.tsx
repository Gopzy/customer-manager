import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import customerObj from "../../customer";
import {
  GET_CUSTOMER,
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_SUCCESS,
} from "../action/actionType";

// const CUSTOMER_API =
//   "https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";

export function* getCustomersSaga({ success, failed }) {
  try {
    // const {
    //   data: { data },
    // } = yield call(axios.get, CUSTOMER_API);
    success?.();
    yield put({ type: GET_CUSTOMER_SUCCESS, payload: customerObj });
  } catch (error) {
    failed?.();
    yield put({ type: GET_CUSTOMER_FAILED, payload: error });
  }
}

export function* watchGetCustomer() {
  yield takeLatest(GET_CUSTOMER, getCustomersSaga);
}
