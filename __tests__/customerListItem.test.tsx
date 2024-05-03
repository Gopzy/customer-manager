import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomerListItem from "../components/customerListItem";

describe("CustomerListItem component", () => {
  const mockItem = {
    id: "1",
    first_name: "Henri",
    number: "+94771277218",
    photo: "https://randomuser.me/api/portraits/men/92.jpg",
  };

  test("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <CustomerListItem item={mockItem} />
    );

    const firstNameText = getByText(mockItem.first_name);
    const numberText = getByText(mockItem.number);
    // const image = getByTestId("customer-image");

    expect(firstNameText).toBeDefined();
    expect(numberText).toBeDefined();
    // expect(image.props.source.uri).toBe(mockItem.photo);
  });

  test("navigates to customer details screen on press", () => {
    const mockNavigation = { navigate: jest.fn() };
    const { getByTestId } = render(
      <CustomerListItem item={mockItem} navigation={mockNavigation} />
    );

    // const listItem = getByTestId("customer-list-item");
    // fireEvent.press(listItem);

    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      "CUSTOMER_DETAILS_SCREEN",
      {
        customerId: mockItem.id,
      }
    );
  });
});
