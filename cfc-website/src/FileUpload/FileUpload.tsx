import React, { useRef, useState, ChangeEvent } from "react";
import "./FileUpload.css";

interface FileUploadProps {
  onBack: () => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onBack }) => {
  const [uploadError, setUploadError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const uploadRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      return;
    }
    const file = e.target.files[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        setUploadError("Please upload a valid image file (jpg, png, gif)");
      } else {
        setUploadError("");
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          const contents = event?.target?.result;
          if (contents) {
            // Store the file content in local storage
            localStorage.setItem("uploadedImage", contents as string);
            // Show the popup
            setShowPopup(true);
          }
        };

        e.target.value = "";
        fileReader.readAsDataURL(file);
      }
    } else {
      setUploadError("File could not be uploaded. Please try again.");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
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
          accept="image/jpeg, image/png, image/gif"
          ref={uploadRef}
          onChange={handleUpload}
          className="file-input"
        />
        {uploadError && <p className="error-message">{uploadError}</p>}
        <button className="back-button" onClick={onBack}>
          Back to Home
        </button>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Image Uploaded Successfully</h2>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
