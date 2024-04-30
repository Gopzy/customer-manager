import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import customerObj from "../customer";

const renderCustomers = (customer) => {
  return (
    <View>
      <Text>{customer?.first_name}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const customerData = useSelector((state) => state?.customer?.customerData);
  console.log("customerData >>>>", customerData);

  return customerData.map((customer) => renderCustomers(customer));
};

export default HomeScreen;
