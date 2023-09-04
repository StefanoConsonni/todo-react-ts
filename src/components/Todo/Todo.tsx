import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TTodo } from "../../global/types/types";
import { getRequestOptions, API } from "../../global/utils";
import { checkIconStyles } from "../../global/styles/sxStyles";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import "./todo.css";

export function Todo({ id, title, isCompleted }: TTodo) {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState<boolean>(isCompleted);

  const handleToggle = (e: FormEvent): void => {
    e.stopPropagation();
    setIsDone((prevState) => !prevState);

    const newData =
      isCompleted === true
        ? {
            isCompleted: false,
          }
        : {
            isCompleted: true,
          };

    const requestOptions = getRequestOptions("PATCH", newData);
    fetch(`${API.MAIN_URL}/todos/${id}`, requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="todo-container" onClick={() => navigate(`/todos/${id}`)}>
      <div className="todo-container-details">
        {isDone ? (
          <CheckBoxIcon onClick={handleToggle} sx={checkIconStyles} />
        ) : (
          <CheckBoxOutlineBlankIcon onClick={handleToggle} sx={checkIconStyles} />
        )}
        <p className="todo-title">{title}</p>
      </div>
    </div>
  );
}
