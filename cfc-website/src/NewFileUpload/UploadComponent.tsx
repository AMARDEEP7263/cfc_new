import React, { useState } from "react";
import { ReactComponent as UploadIcon } from "./UploadButton.svg";
import "./UploadComponent.css";
import FloatingActionButtons from "./Buttons/FloatingActionButtons.tsx";
import ButtonCancel from "./Buttons/ButtonCancel.jsx";
import ButtonContinue from "./Buttons/ButtonContinue.jsx";
interface UploadComponentProps {
  onSelect: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const UploadComponent: React.FC<UploadComponentProps> = ({ onSelect }) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  // useEffect(() => {
  //   const starContainer = document.querySelector(".background");
  //   const createStar = () => {
  //     const star = document.createElement("div");
  //     star.className = "star";
  //     star.style.left = `${Math.random() * 100}vw`;
  //     star.style.top = `${Math.random() * 100}vh`;
  //     star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  //     starContainer.appendChild(star);

  //     setTimeout(() => {
  //       star.remove();
  //     }, 5000);
  //   };

  //   const intervalId = setInterval(createStar, 100);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className="background">
      <div className="upload-container">
        <header className="upload-header">
          <ButtonCancel onClick={onSelect}>Cancel</ButtonCancel>

          <ButtonContinue onClick={onSelect} className="upload-btn continue">
            Continue
          </ButtonContinue>
        </header>
        <div className="upload-body">
          <div className="upload-area">
            <div className="upload-box">
              <label htmlFor="file-upload" className="upload-icon-button">
                <UploadIcon className="upload-icon" />
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <p className="upload-text">
                Drag and drop an file
                <br />
                <br />
                <br />
                <b>Max 50 MB Each</b>
              </p>
              <br />
              <FloatingActionButtons
                className="upload-btn browse"
                onClick={() => document.getElementById("file-upload")?.click()}
              >
                Browse Files
              </FloatingActionButtons>
            </div>
          </div>
          {files && (
            <div className="uploaded-files">
              {Array.from(files).map((file, index) => (
                <div key={index} className="file-info">
                  <p className="file-name">{file.name}</p>
                  <p className="file-size">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;
