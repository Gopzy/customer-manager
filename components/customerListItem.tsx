import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomerListItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { first_name, email, number, gender, photo } = item;

  return (
    <TouchableOpacity
      key={item.id}
      style={style.container}
      onPress={() =>
        navigation.navigate("customerDetailsScreen", { customer: item })
      }
    >
      <View>
        <View style={style.quantity}>
          <Image source={{ uri: photo }} style={style.imgStyle} />
          <View>
            <Text style={style.quantityTxt}>{`name: ${first_name}`}</Text>
            <Text style={style.size}>{`number: ${number}`}</Text>
            <Text style={[style.size, style.font_15]}>{`gender: ${
              gender === "M" ? "Male" : "Female"
            }`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 8,
    paddingVertical: 25,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cartgreen,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityTxt: {
    paddingLeft: 10,
    fontSize: 18,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  size: {
    paddingLeft: 10,
    fontSize: 18,
    marginTop: 5,
  },
  font_15: {
    fontSize: 15,
  },
});

export default CustomerListItem;
