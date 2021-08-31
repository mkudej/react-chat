import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("input is required"),
  password: Yup.string()
    .min(6, "input should have at least 6 characters")
    .required("input is required"),
});

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("input is required"),
  name: Yup.string().required("input is required"),
  password: Yup.string()
    .min(6, "input should have at least 6 characters")
    .required("input is required"),
});
