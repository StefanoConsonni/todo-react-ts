import { API } from "../../global/utils/constants";
import { Todo } from "../../global/types/types";
import "./todoList.css";

export function TodoList() {
  const { data: todos, isLoading, error } = useFetch<string>(`${API.MAIN_URL}/todos`);

  return (
    <div className="todo-list-container">
      <h1>List of todos</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {todos && todos.length === 0 && <p>There are no todos to show</p>}
      {todos &&
        todos.length > 0 &&
        todos.map((todo: Todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} status={todo.status} />
        ))}
    </div>
  );
}
