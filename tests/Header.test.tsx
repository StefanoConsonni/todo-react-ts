import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../src/components";

it("should have", () => {
  render(<Header />);
  const title = screen.queryByText(/todo/i);
  expect(title).toBeDefined();
});
