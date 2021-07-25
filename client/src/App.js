import logo from './logo.svg';
import './App.css';
import Home from "./container/Home";
import SignUp from "./container/SignUp";

function App() {
  return (
    <>
      <div className="signup">
        <SignUp />
      </div>
      <div className="app">
        <Home />
      </div>
    </>

  );
}

export default App;
