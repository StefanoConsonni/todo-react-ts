import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../global/hooks/useFetch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { arrowIconStyles } from "../../global/styles/sxStyles";
import { API } from "../../global/utils";
import { TTodo } from "../../global/types/types";
import "./todoDetails.css";

export function TodoDetails() {
  const { id } = useParams();
  const { data: todo, isLoading, error } = useFetch<TTodo>(`${API.MAIN_URL}/todos/${id}`);

  return (
    <div className="todo-details-page-container">
      <Link to="/">
        <ArrowBackIcon sx={arrowIconStyles} />
      </Link>
      <div className="todo-details-container">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {todo && (
          <>
            <h1 className="todo-details-heading">Todo details</h1>
            <div className="todo-details-single-content">
              <h3>Title</h3>
              <p>{todo.title}</p>
            </div>
            {todo.description && (
              <div className="todo-details-single-content">
                <h3>Description</h3>
                <p>{todo.description}</p>
              </div>
            )}
            <div className="todo-details-single-content">
              <h3>Status</h3>
              <p>{`${todo.isCompleted ? "Completed" : "Not Completed"}`}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
