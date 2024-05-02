import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FILTER_OPTIONS } from "../constants";

const Filter = ({ onSelect, visible, onToggle }) => {
  return (
    <View>
      <TouchableOpacity style={style.filterButton} onPress={onToggle}>
        <Text>Filter</Text>
      </TouchableOpacity>

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
    top: 10,
    right: 10,
    backgroundColor: "lightgray",
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
});

export default Filter;
