// import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import SignInSide from "./LoginComponent/SignInSide";
import LandingPage from "./LandingPage/LandingPage";
import BasicButtonGroup from "./FileUpload/components/BasicButtonGroup";

function App() {
  const [loginButton, setLoginButton] = React.useState(false);

  function handleClick(event) {
    event.preventDefault();

    setLoginButton((previousstate) => !previousstate);
  }

  return (
    <div className="App">
      <>
        {!loginButton ? (
          <>
            <LandingPage onSelect={handleClick} />
            <BasicButtonGroup />
          </>
        ) : (
          <SignInSide onSelect={handleClick} />
        )}
      </>
    </div>
  );
}

export default App;
