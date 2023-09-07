import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AddNewTodoButton } from "./AddNewTodoButton";

it("renders AddNewTodoButton component", () => {
  render(
    <MemoryRouter>
      <AddNewTodoButton />
    </MemoryRouter>
  );
});

it("button has the correct CSS class", () => {
  const { getByText } = render(
    <MemoryRouter>
      <AddNewTodoButton />
    </MemoryRouter>
  );
  const button = getByText("Add new todo");
  expect(button).toHaveClass("btn btn-add");
});
