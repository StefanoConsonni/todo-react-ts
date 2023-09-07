import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { TodoDetails } from "./TodoDetails";

test("renders TodoDetails component", () => {
  render(
    <MemoryRouter>
      <TodoDetails />
    </MemoryRouter>
  );
});
