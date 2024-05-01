import React, { useEffect } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomerListItem from "../components/customerListItem";
import colors from "../constants/colors";
import customerObj from "../customer";
import { getCustomer } from "../store/action/customerAction";

const HomeScreen = () => {
  const customerData = useSelector((state) => state?.customer?.customerData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCustomer());
  }, []);

  const renderCustomers = ({ item }) => {
    return <CustomerListItem item={item} />;
  };

  return (
    <ScrollView style={style.scrollContainer}>
      <FlatList
        data={customerData}
        renderItem={renderCustomers}
        keyExtractor={(item) => item.id}
        numColumns={1}
        horizontal={false}
      />
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
