import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../global/utils/constants";
import { TTodo } from "../../global/types/types";
import { useFetch } from "../../global/hooks/useFetch";
import { Todo } from "../Todo/Todo";
import "./todoList.css";

export function TodoList() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch<TTodo[]>(`${API.MAIN_URL}/todos`);
  const [todos, setTodos] = useState<TTodo[] | null>(null);

  useEffect(() => {
    if (data) {
      const sortedByDateTime = [...data].sort((a, b) => {
        const dateA = Date.parse(a.createdAt);
        const dateB = Date.parse(b.createdAt);
        return dateB - dateA;
      });

      const completedTodos = sortedByDateTime.filter((todo) => todo.isCompleted);
      const incompleteTodos = sortedByDateTime.filter((todo) => !todo.isCompleted);
      const finalSortedArray = [...incompleteTodos, ...completedTodos];
      setTodos(finalSortedArray);
    }
  }, [data]);

  return (
    <div className="todo-list-section">
      <button onClick={() => navigate("/todos/create")} className="btn btn-add">
        Add new todo
      </button>
      <div className="todo-list">
        <div className="todo-list-paragraphs">
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {todos && todos.length === 0 && <p>There are no todos to show</p>}
        </div>
        <div className="todo-list-items">
          {todos &&
            todos.length > 0 &&
            todos.map((todo: TTodo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isCompleted={todo.isCompleted}
                todos={todos}
                setTodos={(newTodos) => setTodos(newTodos)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
