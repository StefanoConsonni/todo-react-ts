import * as yup from "yup";

export const todoFormSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Insert at least 3 characters")
    .max(50, "Insert less than 50 characters")
    .required("Title required"),
  description: yup.string().nullable(),
  status: yup.string().oneOf(["not completed", "completed"]).required("Required"),
});
