import React, { useState } from "react";
import "./UploadTrack.css";
import axios from "axios";

const UploadTrack = () => {
  const [file, setFile] = useState(null);
  const getRemainingDays = () => {
    let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    let days =
      time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
    return <div id="days">{days}</div>;
  };
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
    <>
      <div className="upload-track-container">
        <form
          className="upload-track-form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
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
      <div id="remaining-days">
        There are {getRemainingDays()} day's remaining in this competition.
      </div>
      <div id="directions">
        Listen to the featured beat and submit your verse!
      </div>
    </>
  );
};

export default UploadTrack;
