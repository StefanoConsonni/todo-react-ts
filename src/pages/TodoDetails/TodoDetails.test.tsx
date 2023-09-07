import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TodoDetails } from "./TodoDetails";

it("renders TodoDetails component", () => {
  render(
    <MemoryRouter>
      <TodoDetails />
    </MemoryRouter>
  );
});
