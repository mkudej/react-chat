import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import firebase, { auth } from "../firebase";
import ErrorFeedback from "../components/ErrorFeedback/ErrorFeedback";
import { SignupSchema } from "../helpers/validationSchemas";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [
    createUserWithEmailAndPassword,
    signUpUser,
    signUpLoading,
    signUpError,
  ] = useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    if (signUpUser?.operationType === "signIn") {
      firebase.firestore().collection("users").add({
        uid: signUpUser.user?.uid,
        bio: "bio",
        phone: "phone",
      });
    }
  }, [signUpUser]);

  return (
    <div className="bg-primary">
      <div className="container flex h-screen justify-center items-center max-w-md">
        <Card className="p-8 text-white shadow-md">
          <h3 className="font-bold text-2xl mb-5 text-center">
            Create an account
          </h3>

          {signUpError && <ErrorFeedback message={signUpError.message} />}

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={({ email, password }, { resetForm }) => {
              createUserWithEmailAndPassword(email, password);
              resetForm();
            }}
          >
            {() => (
              <Form>
                <Input
                  className="mb-5"
                  label="email"
                  name="email"
                  type="email"
                />
                <Input className="mb-5" label="name" name="name" type="text" />
                <Input
                  className="mb-5"
                  label="password"
                  name="password"
                  type="password"
                />
                <button
                  className="bg-button-color block w-full rounded-sm py-2 px-4 font-bold white text-white"
                  type="submit"
                >
                  {signUpLoading ? "Siging up..." : "Sign up"}
                </button>
              </Form>
            )}
          </Formik>

          <p className="text-sm mt-2">
            <Link to="/signin">Allready have account ?</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
