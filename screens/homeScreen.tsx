import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CustomerListItem from "../components/customerListItem";
import colors from "../constants/colors";
import customerObj from "../customer";

const renderCustomers = (customer) => {
  return <CustomerListItem item={customer} />;
};

const HomeScreen = () => {
  const customerData = useSelector((state) => state?.customer?.customerData);
  console.log("customerData >>>>", customerData);

  return (
    <ScrollView style={style.scrollContainer}>
      {customerData.map((customer) => renderCustomers(customer))}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 5,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalContainer: {
    backgroundColor: colors.bgWhite,
    borderTopWidth: 2,
    borderTopColor: colors.borderGrey,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    paddingRight: 5,
  },
});

export default HomeScreen;
