// import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import SignInSide from "./LoginComponent/SignInSide";
import LandingPage from "./LandingPage/LandingPage";
import FileUpload from "./FileUpload/FileUpload.tsx";
function App() {
  const [loginButton, setLoginButton] = React.useState(false);
  const [documentButton, setDocumentButton] = React.useState(false);

  function handleClick(event) {
    event.preventDefault();

    setLoginButton((previousState) => !previousState);
  }

  function handleDocumentClick(event) {
    event.preventDefault();
    setDocumentButton((previousState) => !previousState);
  }

  return (
    <div className="App">
      <>
        {!loginButton ? (
          <LandingPage
            onSelect={handleClick}
            onDocumentButtonClick={handleDocumentClick}
          />
        ) : (
          <SignInSide onSelect={handleClick} />
        )}
      </>
    </div>
  );
}

export default App;
