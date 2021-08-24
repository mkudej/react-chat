import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiFillLock, AiFillMail } from "react-icons/ai";
import { useHistory } from "react-router";

import Card from "../components/Card/Card";
import ErrorFeedback from "../components/ErrorFeedback/ErrorFeedback";
import Input from "../components/Input/Input";
import { auth } from "../firebase";
import { SignupSchema } from "../helpers/validationSchemas";

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
    <div className="flex h-screen justify-center items-center">
      <Card>
        <h1 className="font-bold text-lg mb-6">Login</h1>
        {signInError && <ErrorFeedback message={signInError.message} />}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={({ email, password }, { resetForm }) => {
            signInWithEmailAndPassword(email, password);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <Input
                name="email"
                type="email"
                icon={<AiFillMail className="mr-2 text-gray" size={22} />}
              />
              <Input
                name="password"
                type="password"
                icon={<AiFillLock className="mr-2 text-gray" size={22} />}
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
      </Card>
    </div>
  );
}
