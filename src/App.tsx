import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage, TodoCreateForm } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/todos/create" element={<TodoCreateForm />} />
      </Routes>
    </BrowserRouter>
  );
}
