import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AddDetailsModal from "../components/modal";
import SalesInfo from "../components/salesInfo";
import colors from "../constants/colors";
import { deleteSales } from "../store/action/customerAction";
import {
  addModalType,
  customerDataType,
  Reducers,
  salesInfoType,
} from "../types/types";

const CustomerDetailsScreen = ({ route }: { route: any }) => {
  const { customerId } = route.params;

  const dispatch = useDispatch();

  const [customerDetails, setCustomerDetails] = useState<customerDataType>();
  const [modalVisible, setModalVisible] = useState<addModalType>({
    status: false,
    salesId: "",
  });

  const { customerData } = useSelector((state: Reducers) => state?.customer);

  useEffect(() => {
    const findCustomer = customerData?.find(({ id }) => id === customerId);
    findCustomer && setCustomerDetails(findCustomer);
  }, [customerData]);

  const handleDeleteSales = (salesId: string) => {
    const payload = {
      customerId: customerDetails?.id,
      sId: salesId,
    };

    // confirmation alert for delete records
    return Alert.alert(
      "Delete opportunity",
      "Are you sure you want to delete the record",
      [
        {
          text: "Cancel",
        },
        { text: "OK", onPress: () => dispatch(deleteSales(payload)) },
      ]
    );
  };

  const renderSalesInfo = (salesInfo: salesInfoType) => {
    return (
      <SalesInfo
        salesInfo={salesInfo}
        onDelete={handleDeleteSales}
        onEdit={setModalVisible}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: customerDetails?.photo }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            {customerDetails?.first_name} {customerDetails?.last_name}
          </Text>
          <Text style={[styles.contactItem, styles.bottomMargin_5]}>
            {customerDetails?.email}
          </Text>
          <Text style={[styles.contactItem, styles.bottomMargin_5]}>
            {customerDetails?.number}
          </Text>
          <Text style={styles.contactItem}>
            {customerDetails?.gender === "M" ? "Male" : "Female"}
          </Text>
        </View>
      </View>
      <View style={styles.salesInfoContainer}>
        <Text style={styles.salesInfoTitle}>Sales Opportunities</Text>
        {customerDetails?.salesInfo.map(renderSalesInfo)}
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible({ status: true, salesId: "" })}
          style={styles.button}
        >
          <Text style={styles.text}>Add Sales Information</Text>
        </TouchableOpacity>
        <AddDetailsModal
          customerData={customerDetails}
          salesId={modalVisible?.salesId}
          visible={modalVisible.status}
          onClose={() => setModalVisible({ status: false, salesId: "" })}
        />
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
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 25,
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
  color: {
    fontSize: 16,
    fontWeight: "500",
  },
  contactItem: {
    fontSize: 16,
    color: "#666",
  },
  bottomMargin_5: {
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
});

export default CustomerDetailsScreen;
