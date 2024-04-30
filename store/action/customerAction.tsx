import { GET_CUSTOMER } from "./actionType";

const getCustomer = (success?: Function, failed?: Function) => ({
  type: GET_CUSTOMER,
  success,
  failed,
});

export default getCustomer;
