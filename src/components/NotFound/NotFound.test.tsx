import { render, screen } from "@testing-library/react";
import { NotFound } from "..";

it("should have the text: error", () => {
  render(<NotFound />);
  const text = screen.queryByText(/error/i);
  expect(text).toBeDefined();
});

it("should have the text: The resource could not be found!", () => {
  render(<NotFound />);
  const text = screen.queryByText(/The resource could not be found!/i);
  expect(text).toBeDefined();
});
