import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { TodoList } from "./TodoList";

it("renders TodoList component", () => {
  render(
    <MemoryRouter>
      <TodoList />
    </MemoryRouter>
  );
});

// Mock useFetch to simulate the loading state
vi.mock("../../global/hooks/useFetch", () => ({
  useFetch: () => ({
    data: null,
    isLoading: true,
    error: null,
  }),
}));

it('displays "Loading..." while fetching data', async () => {
  const { getByText } = render(
    <MemoryRouter>
      <TodoList />
    </MemoryRouter>
  );
  await waitFor(() => getByText("Loading..."));
});
