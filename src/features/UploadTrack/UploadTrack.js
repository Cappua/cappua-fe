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
    formData.append("user_id", 1);
    formData.append("competition_id", 1);
    formData.append("type", "verse");
    formData.append("title", "Best Friend");

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
        className="upload-track-form"
        onSubmit={(event) => {
          handleSubmit(event);
        }}>
        <label htmlFor="uploader" className="upload-input">
          <i className="fas fa-arrow-circle-up" id="upload-icon" />
        </label>

        <input
          id="uploader"
          style={{ visibility: "hidden", height: "0", width: "0" }}
          type="file"
          onChange={(event) => {
            handleChange(event);
          }}
          accept=".mp3,audio/*"
        />

        <button className={file ? "submit-button" : "submit-button disabled"}>
          {/* <div className={file ? "green-fill" : "hidden"}>Submit</div> */}
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadTrack;
