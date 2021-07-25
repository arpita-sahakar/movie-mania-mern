import logo from './logo.svg';
import './App.css';
import Home from "./container/Home";
import SignUp from "./container/SignUp";
import Login from "./container/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="login">
              <Login />
            </div>
          </Route>
          <Route path="/signup">
            <div className="signup">
              <SignUp />
            </div>
          </Route>
          <Route path="/home">
            <div className="app">
              <Home />
            </div>
          </Route>
        </Switch>
      </Router>



      {/* <div className="loginSignup">
        <Login />
      </div>
      <div className="loginSignup">
        <SignUp />
      </div>
      <div className="app">
        <Home />
      </div> */}
    </>

  );
}

export default App;
