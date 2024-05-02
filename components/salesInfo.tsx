import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import { salesInfoType } from "../types/types";

const SalesInfo = ({
  salesInfo: { salesId, name, status },
  onDelete,
  onEdit,
}: {
  salesInfo: salesInfoType;
  onDelete: (string) => void;
  onEdit: ({}) => void;
}) => {
  return (
    <View key={salesId} style={styles.salesContainer}>
      <View style={styles.saleItem}>
        <Text style={styles.saleName}>{name}</Text>
        <Text style={styles.saleStatus}>{status}</Text>
      </View>
      <View style={styles.flexEnd}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => onDelete(salesId)}
            style={styles.actionBtn}
          >
            <Text style={styles.colorRed}>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onEdit({ status: true, salesId: salesId })}
          >
            <Text style={styles.textBlue}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: colors.bgWhite,
  },
  salesContainer: {
    paddingVertical: 10,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25,
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  actionBtn: {
    paddingHorizontal: 15,
  },
  rowContainer: {
    flexDirection: "row",
  },
  colorRed: {
    color: colors.iconRed,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    color: colors.bgWhite,
  },
  textBlue: {
    color: colors.primaryBlue,
  },

  color: {
    fontSize: 16,
    fontWeight: "500",
  },
  email: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  number: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  gender: {
    fontSize: 16,
    color: "#666",
  },
  salesInfoContainer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 20,
  },
  salesInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  saleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  saleName: {
    fontSize: 16,
  },
  saleStatus: {
    fontSize: 16,
    color: "#666",
  },
});

export default SalesInfo;
