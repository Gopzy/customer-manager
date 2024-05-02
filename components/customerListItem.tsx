import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CUSTOMER_DETAILS_SCREEN } from "../constants";
import { customerDataType } from "../types/types";
import colors from "../constants/colors";
import { rootStactParams } from "../App";

type ScreenNavigationProp = NativeStackNavigationProp<rootStactParams>;

const CustomerListItem = ({
  item: { first_name, number, photo, id },
}: {
  item: customerDataType;
}) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const onCustomerPress = () => {
    navigation.navigate(CUSTOMER_DETAILS_SCREEN, { customerId: id });
  };

  return (
    <TouchableOpacity
      key={id}
      style={style.container}
      onPress={onCustomerPress}
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
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgWhite,
    elevation: 5,
    shadowColor: "blue",
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
