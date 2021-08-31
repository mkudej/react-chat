import { useAuthState } from "react-firebase-hooks/auth";
import { Redirect, Route, RouteProps } from "react-router";
import { auth } from "../../firebase";

export default function PrivateRoute({
  component: Component,
  ...rest
}: RouteProps) {
  const [user, loading] = useAuthState(auth);

  if (!Component) return null;
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
