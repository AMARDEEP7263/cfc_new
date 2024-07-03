import React, { useState } from "react";
import "./ResponsivePage.css";

const ResponsivePage: React.FC = () => {
  const [applicationNumber, setApplicationNumber] = useState<string>("");

  const handleSearch = () => {
    if (applicationNumber) {
      alert(`Searching for application number: ${applicationNumber}`);
    } else {
      alert("Please enter an application number");
    }
  };

  const handleClear = () => {
    setApplicationNumber("");
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="application-number">Application Status</label>
        <input
          type="text"
          id="application-number"
          value={applicationNumber}
          onChange={(e) => setApplicationNumber(e.target.value)}
          placeholder="Enter application number"
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <button className="loan-button">Loan Application Form</button>
    </div>
  );
};

export default ResponsivePage;
