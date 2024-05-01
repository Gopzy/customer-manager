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
import { CUSTOMER_DETAILS_SCREEN, STATUS } from "../constants";

const CustomerListItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { first_name, number, photo, status } = item;

  return (
    <TouchableOpacity
      key={item.id}
      style={
        status === STATUS.Inactive
          ? [style.container, { backgroundColor: colors.borderGrey }]
          : style.container
      }
      onPress={() =>
        navigation.navigate(CUSTOMER_DETAILS_SCREEN, { customer: item })
      }
    >
      <View style={style.content}>
        <Image source={{ uri: photo }} style={style.imgStyle} />
        <Text style={style.contentTxt}>{first_name}</Text>
        <Text style={style.size}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cartgreen,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
  },
  contentTxt: {
    paddingLeft: 10,
    fontSize: 18,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  size: {
    paddingLeft: 10,
    fontSize: 18,
    marginTop: 5,
  },
});

export default CustomerListItem;
