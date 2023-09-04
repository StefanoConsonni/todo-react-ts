import { useNavigate } from "react-router-dom";
import "./homepage.css";

export function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepage-container">
      <button onClick={() => navigate("/create")} className="btn">
        Add new todo
      </button>
    </div>
  );
}
