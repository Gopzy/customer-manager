import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SalesInfo from "../components/salesInfo";

describe("SalesInfo Component", () => {
  const salesInfo = {
    salesId: "1",
    name: "QA",
    status: "New",
  };

  it("renders correctly", () => {
    const { getByText } = render(
      <SalesInfo salesInfo={salesInfo} onDelete={() => {}} onEdit={() => {}} />
    );

    expect(getByText("QA")).toBeTruthy();
    expect(getByText("New")).toBeTruthy();
  });

  it("onDelete function triggers once when Remove button is pressed", () => {
    const onDeleteMock = jest.fn();
    const { getByText } = render(
      <SalesInfo
        salesInfo={salesInfo}
        onDelete={onDeleteMock}
        onEdit={() => {}}
      />
    );

    fireEvent.press(getByText("Remove"));
    expect(onDeleteMock).toHaveBeenCalledWith("1");
  });

  it(" onEdit function triggers once when Edit button is pressed", () => {
    const onEditMock = jest.fn();
    const { getByText } = render(
      <SalesInfo
        salesInfo={salesInfo}
        onDelete={() => {}}
        onEdit={onEditMock}
      />
    );

    fireEvent.press(getByText("Edit"));
    expect(onEditMock).toHaveBeenCalledWith({ status: true, salesId: "1" });
  });
});
