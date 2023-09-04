import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { TTodo } from "../../global/types/types";
import { API } from "../../global/utils/constants";
import { getRequestOption } from "../../global/utils/getRequestOptions";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { iconStyles } from "../../global/styles/sxStyles";
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

    const requestOptions = getRequestOption("PATCH", newData);
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
          <CheckBoxIcon onClick={handleToggle} sx={iconStyles} />
        ) : (
          <CheckBoxOutlineBlankIcon onClick={handleToggle} sx={iconStyles} />
        )}
        <p className="todo-title">{title}</p>
      </div>
    </div>
  );
}
