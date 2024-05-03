import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Filter from "../components/filter";

describe("Filter component", () => {
  const onSelectMock = jest.fn();
  const onToggleMock = jest.fn();

  it("renders filter title option 1 as expected", () => {
    const { getByText } = render(
      <Filter
        onSelect={onSelectMock}
        visible={false}
        onToggle={onToggleMock}
        selectedFilter=""
      />
    );

    expect(getByText("All Customers")).toBeTruthy();
  });

  it("renders filter title option 2 correctly", () => {
    const { getByText } = render(
      <Filter
        onSelect={onSelectMock}
        visible={false}
        onToggle={onToggleMock}
        selectedFilter="Active"
      />
    );

    expect(getByText("Active Customers")).toBeTruthy();
  });

  it("onToggle function triggers when filter button is pressed", () => {
    const { getByTestId } = render(
      <Filter
        onSelect={onSelectMock}
        visible={false}
        onToggle={onToggleMock}
        selectedFilter=""
      />
    );

    fireEvent.press(getByTestId("filterButton"));
    expect(onToggleMock).toHaveBeenCalled();
  });

  it(" onSelect triggers function when filter option is pressed", () => {
    const { getByText } = render(
      <Filter
        onSelect={onSelectMock}
        visible={true}
        onToggle={onToggleMock}
        selectedFilter=""
      />
    );

    fireEvent.press(getByText("Active"));
    expect(onSelectMock).toHaveBeenCalledWith("Active");
  });
});
