// import logo from "./logo.svg";
import "./App.css";
import SignInSide from "./LoginComponent/SignInSide";
import LandingPage from "./LandingPage/LandingPage";

import { useState } from "react";

function App() {
  const [loginButton, setLoginButton] = useState(false);

  function handleClick(event) {
    event.preventDefault();

    setLoginButton((previousstate) => !previousstate);
  }

  return (
    <div className="App">
      <>
        {!loginButton ? (
          <LandingPage onSelect={handleClick} />
        ) : (
          <SignInSide onSelect={handleClick} />
        )}
      </>
    </div>
  );
}

export default App;
