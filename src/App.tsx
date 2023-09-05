import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, TodoCreateForm, TodoDetails } from "./pages";
import { NotFound } from "./components";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todos/create" element={<TodoCreateForm />} />
          <Route path="/todos/:id" element={<TodoDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
