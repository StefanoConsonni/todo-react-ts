import { useNavigate } from "react-router-dom";

export function AddNewTodoButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/todos/create")} className="btn btn-add">
      Add new todo
    </button>
  );
}
