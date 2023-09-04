import { Todo } from "../Todo/Todo";
import { API } from "../../global/utils/constants";
import { TTodo } from "../../global/types/types";
import { useFetch } from "../../global/hooks/useFetch";
import "./todoList.css";

export function TodoList() {
  const { data: todos, isLoading, error } = useFetch(`${API.MAIN_URL}/todos`);

  return (
    <div className="todo-list-container">
      <h1>List of todos</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {todos && todos.length === 0 && <p>There are no todos to show</p>}
      {todos &&
        todos.length > 0 &&
        todos.map((todo: TTodo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
        ))}
    </div>
  );
}
