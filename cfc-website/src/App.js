import * as React from "react";
import "./App.css";
import SignInSide from "./LoginComponent/SignInSide";
import LandingPage from "./LandingPage/LandingPage";
import FileUpload from "./FileUpload/FileUpload.tsx"; // Update this line

function App() {
  const [activeComponent, setActiveComponent] = React.useState("landing");

  function handleClick(event) {
    event.preventDefault();
    setActiveComponent(activeComponent === "login" ? "landing" : "login");
  }

  function handleDocumentClick(event) {
    event.preventDefault();
    setActiveComponent("document");
  }

  function handleBackToLanding() {
    setActiveComponent("landing");
  }

  return (
    <div className="App">
      {activeComponent === "landing" && (
        <LandingPage
          onSelect={handleClick}
          onDocumentButtonClick={handleDocumentClick}
        />
      )}
      {activeComponent === "login" && <SignInSide onSelect={handleClick} />}
      {activeComponent === "document" && (
        <FileUpload onBack={handleBackToLanding} />
      )}
    </div>
  );
}

export default App;
