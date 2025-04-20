import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RegisterPage from "./RegisterPage";

// filepath: /Users/felix.fermin/Development/copilot-with-react/src/pages/RegisterPage.test.tsx

describe("RegisterPage", () => {
  it("should display an error for an invalid username", () => {
    render(<RegisterPage />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: "short" } });
    const errorMessage = screen.queryByText(
      /username must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character/i
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("should not display an error for a valid username", () => {
    render(<RegisterPage />);
    const usernameInput = screen.getByLabelText(/username/i);

    fireEvent.change(usernameInput, { target: { value: "Valid@123" } });
    const errorMessage = screen.queryByText(
      /username must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character/i
    );

    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should display an error for an invalid UK mobile number", () => {
    render(<RegisterPage />);
    const mobileInput = screen.getByLabelText(/uk mobile number/i);

    fireEvent.change(mobileInput, { target: { value: "12345" } });
    const errorMessage = screen.queryByText(/please enter a valid uk mobile number/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it("should not display an error for a valid UK mobile number", () => {
    render(<RegisterPage />);
    const mobileInput = screen.getByLabelText(/uk mobile number/i);

    fireEvent.change(mobileInput, { target: { value: "+447123456789" } });
    const errorMessage = screen.queryByText(/please enter a valid uk mobile number/i);

    expect(errorMessage).not.toBeInTheDocument();
  });
});