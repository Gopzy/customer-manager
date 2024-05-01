import { configureStore } from "@reduxjs/toolkit";
import customersReducer from "./reducer/customerReducer";
import createSagaMiddleware from "redux-saga";
import { watchGetCustomer } from "./sagas/customerSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    customer: customersReducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchGetCustomer);
