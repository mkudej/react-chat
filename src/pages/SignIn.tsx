/* eslint-disable no-unused-vars */
import classNames from "classnames";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiFillLock, AiFillMail } from "react-icons/ai";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import { auth } from "../firebase";

const getFormikErrorMessage = (key: string, formik: any) => {
  return formik.errors[key] && formik.touched[key] ? formik.errors[key] : null;
};

export default function SignIn() {
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (signInUser?.operationType === "signIn") {
      // TODO redirect to dashboard
    }
  }, [signInUser]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: { email?: string; password?: string } = {};

      if (!values.email) {
        errors.email = "Email is Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Password is Required";
      } else if (values.password.length < 6) {
        errors.password = "Pasword too short";
      }

      return errors;
    },
    onSubmit: ({ email, password }, { resetForm }) => {
      signInWithEmailAndPassword(email, password);
      resetForm();
    },
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <h1 className="font-bold text-lg mb-6">Login</h1>
        {signInError && (
          <div className="my-8 text-red text-sm border-solid border-red border-2 px-3 py-2.5 rounded-lg">
            Error: {signInError.message}
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              icon={<AiFillMail className="mr-2 text-gray" size={22} />}
              error={getFormikErrorMessage("email", formik)}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              icon={<AiFillLock className="mr-2 text-gray" size={22} />}
              onChange={formik.handleChange}
              value={formik.values.password}
              error={getFormikErrorMessage("password", formik)}
            />
            <button
              type="submit"
              className={classNames(
                "bg-button-color block w-full rounded-lg py-2 px-4 font-bold white text-white"
              )}
            >
              Login
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
