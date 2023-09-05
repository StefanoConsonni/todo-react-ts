import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { todoFormSchema } from "../../global/validationSchemas/schemas";
import { TFormValues, TTodo } from "../../global/types/types";
import { getRequestOptions } from "../../global/utils";
import { arrowIconStyles } from "../../global/styles/sxStyles";

export function TodoCreateForm() {
  const navigate = useNavigate();

  async function onSubmit(values: TFormValues, actions: { resetForm: () => void }) {
    const uniqueId = uuidv4().slice(0, 8);

    const newData: TTodo = {
      id: uniqueId,
      title: values.title,
      description: values.description,
      isCompleted: values.status === "not completed" ? false : true,
    };

    const requestOptions = getRequestOptions("POST", newData);

    fetch("http://localhost:3000/todos", requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
    actions.resetForm();
    navigate("/");
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        status: "not completed",
      },
      validationSchema: todoFormSchema,
      onSubmit,
    });

  return (
    <div className="form-page-container">
      <Link to="/">
        <ArrowBackIcon sx={arrowIconStyles} />
      </Link>
      <div className="form-container">
        <h1 className="form-heading">Create a Todo</h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input
              value={values.title}
              onChange={handleChange}
              id="title"
              type="text"
              placeholder="Enter the title"
              onBlur={handleBlur}
              className={errors.title && touched.title ? "input-error" : ""}
            />
            {errors.title && touched.title && <p className="input-error">{errors.title}</p>}
          </div>

          <div className="form-input">
            <label htmlFor="description">Description</label>
            <input
              id="description"
              type="text"
              placeholder="Enter a description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.description && touched.description ? "input-error" : ""}
            />
            {errors.description && touched.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>

          <div className="form-input">
            <label htmlFor="status">Status</label>
            <select id="status" className="form-select-status">
              <option value="not completed">Not Completed</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button disabled={isSubmitting} type="submit" className="btn btn-form">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
