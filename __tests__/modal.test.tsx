import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AddDetailsModal from "../components/modal";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("AddDetailsModal", () => {
  const mockDispatch = jest.fn();

  test("renders modal title and placeholder correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <AddDetailsModal
        visible={true}
        onClose={() => {}}
        salesId=""
        customerData={{ id: "1", salesInfo: [] }}
      />
    );

    expect(getByText("Add opportunity")).toBeDefined();
    expect(getByPlaceholderText("Name")).toBeDefined();
    expect(getByPlaceholderText("Status")).toBeDefined();
    expect(getByText("Save")).toBeDefined();
    expect(getByText("Cancel")).toBeDefined();
  });

  // test('calls modal actions', () => {
  //   const { getByText, getByPlaceholderText } = render(
  //     <AddDetailsModal
  //       visible={true}
  //       onClose={() => {}}
  //       salesId=""
  //       customerData={{ id: '1', salesInfo: [] }}
  //     />
  //   );

  //   const nameInput = getByPlaceholderText('Name');
  //   const statusInput = getByPlaceholderText('Status');
  //   const saveButton = getByText('Save');

  //   fireEvent.changeText(nameInput, 'Test Name');
  //   fireEvent.changeText(statusInput, 'Test Status');
  //   fireEvent.press(saveButton);

  //   expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({ type: 'ADD_SALES' }));
  // });
});
