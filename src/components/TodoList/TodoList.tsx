import { useNavigate } from "react-router-dom";
import { API } from "../../global/utils/constants";
import { TTodo } from "../../global/types/types";
import { useFetch } from "../../global/hooks/useFetch";
import { Todo } from "../Todo/Todo";
import "./todoList.css";

export function TodoList() {
  const navigate = useNavigate();
  const { data: todos, isLoading, error } = useFetch(`${API.MAIN_URL}/todos`);

  return (
    <div className="todo-section">
      <button onClick={() => navigate("/todos/create")} className="btn btn-add">
        Add new todo
      </button>
      <div className="todo-list">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {todos && todos.length === 0 && <p>There are no todos to show</p>}
        <div className="todo-items">
          {todos &&
            todos.length > 0 &&
            todos.map((todo: TTodo) => (
              <Todo key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
            ))}
        </div>
      </div>
    </div>
  );
}
