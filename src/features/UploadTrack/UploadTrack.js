import React from "react";
import "./UploadTrack.css";
import uploadIcon from "../../assets/uploadIcon.png";
const UploadTrack = () => {
  return (
    <div className="upload-track-container">
      {/* <input className="file-upload" type="file" accept="audio/*" /> */}
      <label for="file-upload" className="file-upload">
        <img src={uploadIcon} />
      </label>
      <input
        id="file-upload"
        style={{ visibility: "hidden", height: 0, width: 0 }}
        type="file"
      />
      <label for="file-upload" className="file-upload-text">
        Upload Your Track
      </label>
    </div>
  );
};

export default UploadTrack;
