import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import CalendarScreen from "@/app/(tabs)/calendar";


describe("CalendarScreen Component", () => {
  test("renders the welcome header", () => {
    render(<CalendarScreen />);
    expect(screen.getByText("Welcome to the Calender!")).toBeTruthy();
  });

  test("renders the add course button", () => {
    render(<CalendarScreen />);
    expect(screen.getByText("+ Add Course")).toBeTruthy();
  });

  test("displays the backend message after fetching data", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Test Backend Response" }),
      })
    ) as jest.Mock;

    render(<CalendarScreen />);
    expect(await screen.findByText("Backend Says: Test Backend Response")).toBeTruthy();
  });

  test("renders all weekdays correctly", () => {
    render(<CalendarScreen />);
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    days.forEach((day) => {
      expect(screen.getByText(day)).toBeTruthy();
    });
  });
});
