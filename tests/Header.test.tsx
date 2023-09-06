import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../src/components";

it("should have the text: todo", () => {
  render(<Header />);
  const text = screen.queryByText(/todo/i);
  expect(text).toBeDefined();
});
