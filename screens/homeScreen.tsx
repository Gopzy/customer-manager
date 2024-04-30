import React from "react";
import { Text } from "react-native";
import customerObj from "../customer";

const renderCustomers = (customer) => {
  return (
    <>
      <Text>{customer?.first_name}</Text>
    </>
  );
};

const HomeScreen = () => {
  return customerObj.map((customer) => renderCustomers(customer));
};

export default HomeScreen;
