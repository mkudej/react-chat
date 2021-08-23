import { AiFillLock, AiFillMail } from "react-icons/ai";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import Input from "./components/Input/Input";
import Card from "./components/Card/Card";
import { useFormik } from "formik";
import classNames from "classnames";
import { auth } from "./firebase";
import { useEffect } from "react";

const getFormikErrorMessage = (key: string, formik: any) => {
  return formik.errors[key] && formik.touched[key] ? formik.errors[key] : null;
};

function App() {
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
      createUserWithEmailAndPassword(email, password);
      resetForm();
    },
  });

  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (signUpUser?.operationType === "signIn") {
      // TODO redirect to dashboard
    }
  }, [signUpUser]);

  return (
    <div className="flex h-screen justify-center items-center">
      <Card>
        <h1 className="font-bold text-lg mb-4">
          Join thousands of learners from around the world
        </h1>
        <p className="mb-10 bg-green-500">
          Master web development by making real-life projects. There are
          multiple paths for you to choose
        </p>

        {signUpError && (
          <div className="my-8 text-red text-sm border-solid border-red border-2 px-3 py-2.5 rounded-lg">
            Error: {signUpError.message}
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
              disabled={signUpLoading}
              type="submit"
              className={classNames(
                "bg-button-color block w-full rounded-lg py-2 px-4 font-bold white text-white",
                {
                  "opacity-60": signUpLoading,
                }
              )}
            >
              {signUpLoading ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default App;
