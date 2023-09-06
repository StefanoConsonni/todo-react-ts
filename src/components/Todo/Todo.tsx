import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TTodoComponentProps } from "../../global/types/types";
import { getRequestOptions, API } from "../../global/utils";
import "./todo.css";

export function Todo({ id, title, isCompleted, todos, setTodos }: TTodoComponentProps) {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState<boolean>(isCompleted);

  const handleToggle = (e: FormEvent, id: string): void => {
    e.stopPropagation();
    setIsDone((prevState) => !prevState);

    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    const completedTodos = updatedTodos.filter((todo) => todo.isCompleted);
    const incompleteTodos = updatedTodos.filter((todo) => !todo.isCompleted);
    setTodos([...incompleteTodos, ...completedTodos]);

    const newData =
      isCompleted === true
        ? {
            isCompleted: false,
          }
        : {
            isCompleted: true,
          };

    const requestOptions = getRequestOptions("PATCH", newData);
    fetch(`${API.MAIN_URL}/todos/${id}`, requestOptions).catch((err) => {
      throw new Error(err);
    });
  };

  const handleDelete = (e: FormEvent, id: string) => {
    e.stopPropagation();
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    fetch(`${API.MAIN_URL}/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => setTodos(updatedTodos))
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className={`todo ${isDone ? "completed" : ""}`} onClick={() => navigate(`/todos/${id}`)}>
      <div className="outline-circle check" onClick={(e) => handleToggle(e, id)}>
        {isDone && (
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
            <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
          </svg>
        )}
      </div>
      <div className="todo-description">{title}</div>
      <button type="button" className="delete icon-btn" onClick={(e) => handleDelete(e, id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fillRule="evenodd"
            d={`M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z`}
          />
        </svg>
      </button>
    </div>
  );
}
