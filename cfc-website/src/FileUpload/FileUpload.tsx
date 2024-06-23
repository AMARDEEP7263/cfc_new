import React, { useRef, useState, ChangeEvent } from "react";
import "./FileUpload.css"; // Import the CSS file for styling
import background from "../../assets/background.jpg"; // Import the background image

interface FileUploadProps {
  onBack: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onBack }) => {
  const [uploadError, setUploadError] = useState("");

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];

    if (file) {
      if (file.type !== "text/csv") {
        setUploadError("Please upload a .csv file");
      } else {
        setUploadError("");
      }

      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const contents = event?.target?.result;
        // do something with the file contents here
      };

      e.target.value = "";
      fileReader.readAsText(file);
    } else {
      setUploadError("File could not be uploaded. Please try again.");
    }
  };

  return (
    <div className="file-upload-container">
      <div className="file-upload-background"></div>
      <div className="file-upload-content">
        <div className="file-upload-header">
          <h2>Upload File</h2>
        </div>
        <button
          className="upload-button"
          onClick={() => uploadRef.current?.click()}
        >
          Choose File
        </button>
        <input
          type="file"
          ref={uploadRef}
          onChange={handleUpload}
          className="file-input"
        />
        {uploadError && <p className="error-message">{uploadError}</p>}
        <button className="back-button" onClick={onBack}>
          Back to Landing Page
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
