import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomerListItem from "../components/customerListItem";
import Filter from "../components/filter";
import { FILTER_OPTIONS } from "../constants";
import colors from "../constants/colors";
import { getCustomer, setFilter } from "../store/action/customerAction";

const HomeScreen = () => {
  const { customerData, filteredData } = useSelector(
    (state) => state?.customer
  );
  const dispatch = useDispatch();

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  // const [filterOptions, setFilterOptions] = useState(FILTER_OPTIONS);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilterSelect = (option) => {
    dispatch(setFilter({ filterCriteria: option }));

    toggleFilter();
  };

  useEffect(() => {
    dispatch(getCustomer());
  }, []);

  const renderCustomers = ({ item }) => {
    return <CustomerListItem item={item} />;
  };

  return (
    <View style={style.container}>
      <Filter
        onSelect={handleFilterSelect}
        visible={isFilterVisible}
        onToggle={toggleFilter}
      />

      <ScrollView style={style.scrollContainer}>
        <FlatList
          data={filteredData.length ? filteredData : customerData}
          renderItem={renderCustomers}
          keyExtractor={(item) => item.id}
          numColumns={1}
          horizontal={false}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 5,
    marginTop: 50,
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

  container: {
    flex: 1,
    // paddingHorizontal: 10,
    paddingTop: 10,
  },
});

export default HomeScreen;
