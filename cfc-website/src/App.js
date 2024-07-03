import * as React from "react";
import "./App.css";
import SignInSide from "./LoginComponent/SignInSide";
import LandingPage from "./LandingPage/LandingPage";
import SignUp from "./Signup/SignUp";

import UploadComponent from "./NewFileUpload/UploadComponent.tsx";
import ResponsivePage from "./ApplicationStatus/ResponsivePage.tsx";
function App() {
  const [activeComponent, setActiveComponent] = React.useState("landing");

  function handleLoginClick(event) {
    event.preventDefault();
    setActiveComponent(activeComponent === "login" ? "landing" : "login");
  }

  function handleDocumentClick(event) {
    event.preventDefault();
    setActiveComponent(activeComponent === "document" ? "landing" : "document");
  }
  function handleSignUp(event) {
    event.preventDefault();
    setActiveComponent(activeComponent === "signUp" ? "landing" : "signUp");
  }
  function handleApplicationButton(event) {
    event.preventDefault();
    setActiveComponent(
      activeComponent === "Application" ? "landing" : "Application"
    );
  }

  return (
    <div className="App">
      {activeComponent === "landing" && (
        <LandingPage
          onLogin={handleLoginClick}
          onDocumentButtonClick={handleDocumentClick}
          onSignUp={handleSignUp}
          handleAppButton={handleApplicationButton}
        />
      )}
      {activeComponent === "login" && (
        <SignInSide onSelect={handleLoginClick} />
      )}
      {activeComponent === "document" && (
        <UploadComponent onSelect={handleDocumentClick} />
      )}
      {activeComponent === "signUp" && <SignUp onSelect={handleSignUp} />}
      {activeComponent === "application" && (
        <ResponsivePage onSelect={handleApplicationButton} />
      )}
    </div>
  );
}

export default App;
