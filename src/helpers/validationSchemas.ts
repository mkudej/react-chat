import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should have at least 6 haracters")
    .required("Password is required"),
});
