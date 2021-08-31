import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route } from "react-router";
import { auth } from "../../firebase";

export default function PrivateRoute({ component: Component, ...rest }: any) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>LOADING...</div>;

  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...props} /> : <Redirect to="/signin" />;
      }}
    />
  );
}
