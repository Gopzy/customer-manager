import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { TSaga } from "../../types/types";
import {
  GET_CUSTOMER,
  GET_CUSTOMER_FAILED,
  GET_CUSTOMER_SUCCESS,
} from "../action/actionType";

/*
note: this get api is hosted locally (by json-server), this specific host name 
and port is for Android emulators
*/

const CUSTOMER_API = "http://10.0.2.2:3000/customer";

export function* getCustomersSaga({ success, failed }: TSaga) {
  try {
    const { data } = yield call(axios.get, CUSTOMER_API);
    success?.();
    yield put({ type: GET_CUSTOMER_SUCCESS, payload: data });
  } catch (error) {
    failed?.();
    yield put({ type: GET_CUSTOMER_FAILED, payload: error });
  }
}

export function* watchGetCustomer() {
  yield takeLatest(GET_CUSTOMER, getCustomersSaga);
}
