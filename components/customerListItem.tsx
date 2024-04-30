import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CustomerListItem = ({ item }) => {
  const dispatch = useDispatch();
  const { first_name, email, number, gender, photo } = item;

  return (
    <View key={item.id} style={style.container}>
      <View>
        {/* <Text style={style.itemName}>{`size: ${first_name}`}</Text> */}
        <View style={style.quantity}>
          <Image source={{ uri: photo }} style={style.imgStyle} />
          <View>
            <Text style={style.quantityTxt}>{`name: ${first_name}`}</Text>
            <Text style={style.size}>{`e-mail: ${number}`}</Text>
            <Text
              style={[style.size, style.font_15]}
            >{`gender: ${gender}`}</Text>
          </View>
        </View>
      </View>
    </View>
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

  deleteBtn: {
    flexDirection: "column",
    marginTop: 5,
    alignItems: "flex-end",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    maxWidth: 250,
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
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.fadedGreen,
    borderRadius: 5,
    width: 90,
  },
  btnTxt: {
    color: "white",
    paddingHorizontal: 10,
  },
  font_25: {
    fontSize: 25,
  },
  font_15: {
    fontSize: 15,
  },
  font_20: {
    fontSize: 20,
  },
});

export default CustomerListItem;
