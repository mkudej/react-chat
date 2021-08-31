import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import Card from "../components/Card/Card";
import ErrorFeedback from "../components/ErrorFeedback/ErrorFeedback";
import Input from "../components/Input/Input";
import { auth } from "../firebase";
import { SigninSchema } from "../helpers/validationSchemas";

export default function SignIn() {
  const history = useHistory();
  const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (signInUser?.operationType === "signIn") {
      history.push("/profile");
    }
  }, [signInUser]);

  return (
    <div className="bg-cardbg lg:bg-primary">
      <div className="container flex h-screen justify-center items-center max-w-md">
        <Card className="p-8 text-white lg:shadow-md">
          <h3 className="font-bold text-2xl mb-2">Login</h3>
          <p className="text-base">We are happy to se you again !</p>
          {signInError && <ErrorFeedback message={signInError.message} />}

          <div className="mt-5">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SigninSchema}
              onSubmit={({ email, password }, { resetForm }) => {
                signInWithEmailAndPassword(email, password);
                resetForm();
              }}
            >
              {() => (
                <Form>
                  <Input
                    className="mb-5"
                    label="Email"
                    name="email"
                    type="email"
                  />
                  <Input
                    className="mb-5"
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <button
                    className="bg-button-color block w-full rounded-lg py-2 px-4 font-bold white text-white"
                    type="submit"
                  >
                    {signInLoading ? "Siging in..." : "Login"}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="text-sm  mt-2">
              Need account? <Link to="/signup">Sign up</Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
