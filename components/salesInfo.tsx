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
  salesContainer: {
    paddingVertical: 10,
  },
  actionBtn: {
    paddingHorizontal: 15,
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  rowContainer: {
    flexDirection: "row",
  },
  colorRed: {
    color: colors.iconRed,
  },
  textBlue: {
    color: colors.primaryBlue,
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
