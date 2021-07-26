import './App.css';
import Home from "./container/Home";
import SignUp from "./container/SignUp";
import Login from "./container/Login";
import logo from "./images/Title_MM_transparent.PNG";
import { useState } from "react";
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [login, setLogin] = useState({ email: "", passWord: "" });
  const [signup, setSignup] = useState({ email: "", passWord: "" });

  const [logedInSignUpUser, setlogedInSignUpUser] = useState("");
  const [errMsgs, setErrMsgs] = useState([]);
  const [loginVisible, setLoginVisible] = useState(false);

  useEffect(() => {
    console.log(`I am logged in ${logedInSignUpUser}`)
  }, [logedInSignUpUser])

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="login">
              <div>
                <img className="logSign_Logo" src={logo} />
              </div>
              <Login login={login} setLogin={setLogin} setlogedInSignUpUser={setlogedInSignUpUser} setErrMsgs={setErrMsgs} errMsgs={errMsgs} setLoginVisible={setLoginVisible} loginVisible={loginVisible} />
            </div>
          </Route>
          <Route path="/signup">
            <div className="signup">
              <div>
                <img className="logSign_Logo" src={logo} />
              </div>
              <SignUp signup={signup} setSignup={setSignup} setlogedInSignUpUser={setlogedInSignUpUser} setErrMsgs={setErrMsgs} errMsgs={errMsgs} setLoginVisible={setLoginVisible} loginVisible={loginVisible} />
            </div>
          </Route>
          <Route path="/home">
            <div className="app">
              <Home logedInSignUpUser={logedInSignUpUser} />
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
