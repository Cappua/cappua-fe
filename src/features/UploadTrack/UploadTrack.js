import React from "react";
import "./UploadTrack.css";
import uploadIcon from "../../assets/uploadIcon.png";

const UploadTrack = () => {
  return (
    <div className="upload-track-container">
      {/* <input className="file-upload" type="file" accept="audio/*" /> */}
      <label htmlFor="file-upload" className="file-upload">
        <p className="file-upload-button-text">Upload Your Track</p>
        <img src={uploadIcon} className="file-upload-icon" />
      </label>
      <input
        id="file-upload"
        style={{ visibility: "hidden", height: 0, width: 0 }}
        type="file"
      />
    </div>
  );
};

export default UploadTrack;
