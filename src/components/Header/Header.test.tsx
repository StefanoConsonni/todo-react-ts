import { render, screen } from "@testing-library/react";
import { Header } from "..";

it("should have the text: todo", () => {
  render(<Header />);
  const text = screen.queryByText(/todo/i);
  expect(text).toBeDefined();
});
