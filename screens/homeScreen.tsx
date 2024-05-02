import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CustomerListItem from "../components/customerListItem";
import Filter from "../components/filter";
import { getCustomer, setFilter } from "../store/action/customerAction";
import { customerDataType, Reducers } from "../types/types";

const HomeScreen = () => {
  const { customerData, filteredData } = useSelector(
    (state: Reducers) => state?.customer
  );
  const dispatch = useDispatch();

  const [isFilterVisible, setIsFilterVisible] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>();

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilterSelect = (option: string) => {
    dispatch(setFilter({ filterCriteria: option }));
    setSelectedFilter(option);
    toggleFilter();
  };

  useEffect(() => {
    dispatch(getCustomer());
  }, []);

  const renderCustomers = ({ item }: { item: customerDataType }) => {
    return <CustomerListItem item={item} />;
  };

  return (
    <View style={style.container}>
      <Filter
        onSelect={handleFilterSelect}
        visible={isFilterVisible}
        onToggle={toggleFilter}
        selectedFilter={selectedFilter}
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
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  scrollContainer: {
    marginTop: 50,
  },
});

export default HomeScreen;
