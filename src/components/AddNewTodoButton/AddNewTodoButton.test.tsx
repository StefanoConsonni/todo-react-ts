import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AddNewTodoButton } from "./AddNewTodoButton";

test("renders AddNewTodoButton component", () => {
  render(
    <MemoryRouter>
      <AddNewTodoButton />
    </MemoryRouter>
  );
});

test("button has the correct CSS class", () => {
  const { getByText } = render(
    <MemoryRouter>
      <AddNewTodoButton />
    </MemoryRouter>
  );
  const button = getByText("Add new todo");
  expect(button).toHaveClass("btn btn-add");
});
