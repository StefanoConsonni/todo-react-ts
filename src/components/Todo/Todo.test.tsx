import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { Todo } from "./Todo";

it("renders Todo component", () => {
  const todoProps = {
    id: "8f3z01e0",
    title: "Test Todo",
    isCompleted: false,
    todos: [],
    setTodos: vi.fn(),
  };
  render(
    <MemoryRouter>
      <Todo {...todoProps} />
    </MemoryRouter>
  );
});

it('applies "completed" class when isDone is true', () => {
  const todoProps = {
    id: "8f3z63e0",
    title: "Test Todo",
    isCompleted: true,
    todos: [],
    setTodos: vi.fn(),
  };

  const { container } = render(
    <MemoryRouter>
      <Todo {...todoProps} />
    </MemoryRouter>
  );
  const todoElement = container.firstChild;

  expect(todoElement).toHaveClass("todo completed");
});
