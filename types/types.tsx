export interface Reducers {
  customer: CustomerReducerType;
}

export type CustomerReducerType = {
  customerData: [customerDataType];
  filteredData: [customerDataType];
};

export type customerDataType = {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string | "M" | "F";
  id: string;
  photo: string;
  status: "Active" | "Inactive" | "Lead";
  salesInfo: [salesInfoType];
};

export type salesInfoArrType = {
  salesInfoData: [salesInfoType];
};

export type salesInfoType = {
  salesId: string;
  status: "New" | "Closed Won" | "Closed Lost";
  name: string;
};

export type addModalType = {
  status: boolean;
  salesId: string;
};

export type initialFormType = {
  status: string;
  name: string;
};
