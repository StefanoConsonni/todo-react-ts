import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "..";

test("renders Header component", () => {
  render(<Header />);
});

test("should display the text: todo", () => {
  const { getByText } = render(<Header />);
  const headerText = getByText("todo");
  expect(headerText).toBeInTheDocument();
});

it("should have the text: todo", () => {
  render(<Header />);
  const text = screen.queryByText(/todo/i);
  expect(text).toBeDefined();
});

test("should have the correct CSS class", () => {
  const { container } = render(<Header />);
  const headerElement = container.firstChild;
  expect(headerElement).toHaveClass("app-header");
});
