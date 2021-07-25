import logo from './logo.svg';
import './App.css';
import Home from "./container/Home";
import SignUp from "./container/SignUp";
import Login from "./container/Login";

function App() {
  return (
    <>
      <div className="loginSignup">
        <Login />
      </div>
      <div className="loginSignup">
        <SignUp />
      </div>
      <div className="app">
        <Home />
      </div>
    </>

  );
}

export default App;
