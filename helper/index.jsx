import { FILTER_ALL } from "../constants";
import {
  getCustomerIndex,
  getSalesIndex,
} from "../utils/getSalesCustomerIndex";

// Function for delete a specific sales record based on customerId and salesId
const deletSalesRecord = (state, payload) => {
  const { customerId, sId } = payload;
  const { customerData } = state;

  const customerIndex = getCustomerIndex(customerData, customerId);
  const salesInfoIndex = getSalesIndex(customerData, customerIndex, sId);

  if (customerIndex !== -1 && salesInfoIndex !== -1) {
    const updatedCustomerData = customerData.map((customer, index) => {
      if (index === customerIndex) {
        return {
          ...customer,
          salesInfo: customer.salesInfo.filter(
            (salesRecord, i) => i !== salesInfoIndex
          ),
        };
      }
      return customer;
    });

    return {
      ...state,
      customerData: updatedCustomerData,
    };
  }

  return state;
};

// Function for edit an existing sales record  using customerId and salesId
const editSalesRecord = (state, payload) => {
  const { customerId, sId, status, name } = payload;
  const { customerData } = state;

  const customerIndex = getCustomerIndex(customerData, customerId);
  const salesInfoIndex = getSalesIndex(customerData, customerIndex, sId);

  if (customerIndex !== -1 && salesInfoIndex !== -1) {
    const updatedCustomerData = customerData.map((customer, index) => {
      if (index === customerIndex) {
        return {
          ...customer,
          salesInfo: customer.salesInfo.map((sale) =>
            sale.salesId === sId ? { ...sale, status, name } : sale
          ),
        };
      }
      return customer;
    });

    return {
      ...state,
      customerData: updatedCustomerData,
    };
  }

  return state;
};

// Function for add a sales record  using customerId and salesId
const addSalesRecord = (state, payload) => {
  const { customerId, status, name } = payload;
  const { customerData } = state;

  const customerIndex = getCustomerIndex(customerData, customerId);

  if (customerIndex !== -1) {
    const newSalesRecord = {
      salesId: (Math.floor(Math.random() * 1000) + 1).toString(), // Generate random salesId
      status,
      name,
    };

    const updatedCustomerData = customerData.map((customer, index) => {
      if (index === customerIndex) {
        return {
          ...customer,
          salesInfo: [...customer.salesInfo, newSalesRecord],
        };
      }
      return customer;
    });

    return {
      ...state,
      customerData: updatedCustomerData,
    };
  }

  return state;
};

// Function for filter the customer data based on the filter criteria (status)
const setFilter = (state, payload) => {
  const { customerData } = state;
  const { filterCriteria } = payload;

  const filteredData =
    filterCriteria !== FILTER_ALL
      ? customerData.filter(({ status }) => status === filterCriteria)
      : customerData;

  return {
    ...state,
    filteredData: filteredData,
  };
};

export { deletSalesRecord, editSalesRecord, addSalesRecord, setFilter };
