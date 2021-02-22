import React, { useState } from "react";
import "./UploadTrack.css";
import axios from "axios";

const UploadTrack = () => {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("audio", file);
    formData.append("month", 1);
    formData.append("year", 2021);
    formData.append("type", "track");

    axios({
      method: "post",
      url: "http://localhost:8000/api/v1/upload",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="upload-track-container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}>
        <input
          id="file-upload"
          type="file"
          onChange={(event) => {
            handleChange(event);
          }}
          accept=".mp3,audio/*"
        />
        <button className={file ? "upload-button" : "disabled"}>
          Submit File
        </button>
      </form>
    </div>
  );
};

export default UploadTrack;
