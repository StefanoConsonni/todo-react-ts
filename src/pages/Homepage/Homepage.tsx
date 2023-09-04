import { useNavigate } from "react-router-dom";
import { TodoList } from "../../components";
import "./homepage.css";

export function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <button onClick={() => navigate("/todos/create")} className="btn">
        Add new todo
      </button>
      <TodoList />
    </div>
  );
}
