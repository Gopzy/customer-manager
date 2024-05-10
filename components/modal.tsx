import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors";
import { addSales, editSales } from "../store/action/customerAction";
import { customerDataType, initialFormType } from "../types/types";
import ModalDropdown from "react-native-modal-dropdown";
import { SALES_OPTIONS } from "../constants";

const initialFormData = {
  status: "",
  name: "",
};

const AddDetailsModal = ({
  visible,
  onClose,
  salesId,
  customerData,
}: {
  visible: boolean;
  onClose: () => void;
  salesId?: string;
  customerData: customerDataType;
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<initialFormType>(initialFormData);

  useEffect(() => {
    const initialFormValue = customerData?.salesInfo?.find(
      (element) => element.salesId === salesId
    );

    // setting the initial form state value upon editing
    initialFormValue && setFormData(initialFormValue);
  }, [salesId]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSave = () => {
    const { name, status } = formData;

    // Validating input fields before saving
    if (status.trim() === "" || name.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }

    const addPayload = {
      customerId: customerData?.id,
      status,
      name,
    };

    const editPayload = {
      customerId: customerData?.id,
      status,
      name,
      sId: salesId,
    };

    // dispatch the edit or add action based on salesId
    if (salesId.length) {
      dispatch(editSales(editPayload));
    } else {
      dispatch(addSales(addPayload));
    }

    handleClose();
  };

  const handleClose = () => {
    onClose();
    setFormData(initialFormData);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {salesId.length ? "Edit opportunity" : "Add opportunity"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => handleChange("name", text)}
          />

          <ModalDropdown
            options={SALES_OPTIONS}
            defaultValue={formData.status || "Status"}
            onSelect={(index, value) => handleChange("status", value)}
            style={styles.dropdown}
            textStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownStyle}
            saveScrollPosition={false}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.primaryBlue,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: "black",
  },
  dropdownStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    width: "65%",
  },
});

export default AddDetailsModal;
