import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={SignUp} path="/signup" />
        <PrivateRoute component={Chat} path="/chat" />
        <Route component={SignIn} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
