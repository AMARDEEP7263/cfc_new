import React, { useRef, useState, ChangeEvent } from "react";

const FileUpload = () => {
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
    <>
      {/* style this however you like */}
      <button onClick={() => uploadRef.current?.click()}>Upload file</button>

      <input
        type="file"
        ref={uploadRef}
        onChange={handleUpload}
        style={{ display: "none" }}
      />

      {uploadError ? <p>{uploadError}</p> : null}
    </>
  );
};
export default FileUpload;
