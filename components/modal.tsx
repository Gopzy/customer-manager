import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal } from "react-native";

const AddDetailsModal = ({ visible, onClose }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {
    // Handle form submission here
    // You can send the form data to a backend or handle it locally
    console.log("Form submitted:", {
      title,
      name,
      status,
      country,
      startDate,
      endDate,
    });
    // Clear form fields
    setTitle("");
    setName("");
    setStatus("");
    setCountry("");
    setStartDate(new Date());
    setEndDate(new Date());
    // Close modal
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View style={{ backgroundColor: "#fff", width: "80%", padding: 20 }}>
          <Text>Add Details</Text>
          {/* <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          /> */}

          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Status"
            value={status}
            onChangeText={setStatus}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Button title="Submit" onPress={handleSubmit} />
            <Button title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddDetailsModal;
