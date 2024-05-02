import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FILTER_OPTIONS } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../constants/colors";

const Filter = ({ onSelect, visible, onToggle, selectedFilter }) => {
  return (
    <View>
      <View style={style.container}>
        <Text style={style.text}>
          {selectedFilter ? `${selectedFilter} Customers` : "All Customers"}
        </Text>

        <TouchableOpacity style={style.filterButton} onPress={onToggle}>
          <Icon name="filter" size={25} />
        </TouchableOpacity>
      </View>
      {visible && (
        <View style={style.dropdown}>
          <FlatList
            data={FILTER_OPTIONS}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={style.filterOption}
                onPress={() => onSelect(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  filterButton: {
    position: "absolute",
    right: 10,
    backgroundColor: colors.bgWhite,
    elevation: 5,
    padding: 10,
    borderRadius: 5,
  },
  dropdown: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    zIndex: 1,
  },
  filterOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.shadowGray,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
});

export default Filter;
