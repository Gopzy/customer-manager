import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AddDetailsModal from "../components/modal";
import colors from "../constants/colors";
import { deleteSales } from "../store/action/customerAction";

const CustomerDetailsScreen = ({ route }) => {
  const { customerId } = route.params;

  const dispatch = useDispatch();

  const [customerDetails, setCustomerDetails] = useState<any>();
  const [modalVisible, setModalVisible] = useState({
    status: false,
    salesId: "",
  });

  const customerData = useSelector((state) => state?.customer?.customerData);

  useEffect(() => {
    const selectedcustomer = customerData?.find(({ id }) => id === customerId);
    selectedcustomer && setCustomerDetails(selectedcustomer);
  }, [customerData]);

  const handleDeleteSales = (salesId) => {
    const payload = {
      customerId: customerDetails?.id,
      sId: salesId,
    };
    dispatch(deleteSales(payload));
  };

  const renderSalesInfo = ({ name, salesId, status }) => {
    return (
      <View key={salesId} style={{ paddingVertical: 10 }}>
        <View style={styles.saleItem}>
          <Text style={styles.saleName}>{name}</Text>
          <Text style={styles.saleStatus}>{status}</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => handleDeleteSales(salesId)}
              style={{ paddingHorizontal: 15 }}
            >
              <Text style={{ color: colors.iconRed }}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setModalVisible({ status: true, salesId: salesId })
              }
              style={{}}
            >
              <Text style={styles.textBlue}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
          <Text style={styles.email}>{customerDetails?.email}</Text>
          <Text style={styles.number}>{customerDetails?.number}</Text>
          <Text style={styles.gender}>
            {customerDetails?.gender === "M" ? "Male" : "Female"}
          </Text>
        </View>
      </View>
      <View style={styles.salesInfoContainer}>
        <Text style={styles.salesInfoTitle}>Sales Information</Text>
        {customerDetails?.salesInfo.map(renderSalesInfo)}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 25,
        }}
      >
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
  buttonContainer: {
    marginTop: 20,
  },
});

export default CustomerDetailsScreen;
