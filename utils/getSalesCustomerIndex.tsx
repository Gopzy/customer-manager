import { customerDataType } from "../types/types";

export const getCustomerIndex = (
  customerData,
  customerId: { customerData: customerDataType; customerIdL: string }
) => customerData.findIndex(({ id }) => id === customerId);

export const getSalesIndex = (
  customerData,
  customerIndex,
  sId: { customerData: customerDataType; customerIndex: string; sId: string }
) =>
  customerData[customerIndex].salesInfo.findIndex(
    ({ salesId }) => salesId === sId
  );

export const getGender = (genderString: string) =>
  genderString === "M" ? "Male" : "Female";
