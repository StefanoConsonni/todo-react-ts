import { render, screen } from "@testing-library/react";
import { Header } from "..";

it("renders Header component", () => {
  render(<Header />);
});

it("should display the text: todo", () => {
  const { getByText } = render(<Header />);
  const headerText = getByText("todo");
  expect(headerText).toBeInTheDocument();
});

it("should have the text: todo", () => {
  render(<Header />);
  const text = screen.queryByText(/todo/i);
  expect(text).toBeDefined();
});

it("should have the correct CSS class", () => {
  const { container } = render(<Header />);
  const headerElement = container.firstChild;
  expect(headerElement).toHaveClass("app-header");
});
