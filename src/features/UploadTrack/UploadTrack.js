import React, { useState, useContext } from "react";
import "./UploadTrack.css";
import axios from "axios";
import UserContext from "../../UserContext";
import { CompetitionContext } from "../../CompetitionContext";

const UploadTrack = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const { userInfo } = useContext(UserContext);
  const competition = useContext(CompetitionContext);
  const getRemainingDays = () => {
    let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    let days =
      time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
    return <div id="days">{days}</div>;
    // if (days > 1) {
    //   return `There are ${
    //     <div id="days">{days}</div>
    //   } day's remaining in this competition`
    // } else {
    //   return `There is ${
    //     <div id="days">1</div>
    //   } day remaining in this competition`;
    // }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(userInfo.id);
    console.log(competition.id);
    event.preventDefault();

    const formData = new FormData();

    formData.append("audio", file);
    formData.append("user_id", parseInt(userInfo.id));
    formData.append("competition_id", parseInt(competition.id));
    formData.append("type", "verse");
    formData.append("title", fileName);

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

  const displayPleaseLoginAlert = () => {
    alert("Please login to upload your verse!");
  };

  return (
    <div>
      <div id="remaining-days">
        There are {getRemainingDays()} days remaining in this competition.
      </div>
      <div id="directions">
        Listen to the featured beat and submit your verse!
      </div>
      {userInfo && competition && (
        <div className="upload-track-container">
          <form
            className="upload-track-form"
            onSubmit={(event) => {
              handleSubmit(event);
            }}>
            <div className="download-upload-container">
              <div className="download-track-container">
                <a
                  id="download-link"
                  href={`http://d1nb1e3bp5hs25.cloudfront.net${competition.trackPath}`}
                  title="Download"
                  download>
                  <i className="fas fa-arrow-circle-down down" id="icon" />
                </a>
              </div>
              <label htmlFor="uploader" className="upload-input" title="Upload">
                <i className="fas fa-arrow-circle-up up" id="icon" />
              </label>

              <input
                id="uploader"
                style={{ visibility: "hidden", height: "0", width: "0" }}
                type="file"
                onChange={(event) => {
                  handleFileChange(event);
                }}
                accept=".mp3,audio/*"
              />
            </div>
            <div className="filename-input-container">
              <label style={{ margin: "10px" }} htmlFor="filename-input">
                Filename
              </label>
              <input
                id="filename-input"
                type="text"
                placeholder="i.e. Song Name"
                style={{
                  outline: "none",
                  width: "7.5vw",
                  height: "2.5vh",
                  margin: "0 0 2vh",
                  border: "2px solid black",
                  borderRadius: "5px",
                }}
                onChange={(event) => {
                  handleTextChange(event);
                }}
              />
            </div>
            <button
              className={file ? "submit-button" : "submit-button disabled"}
              title="Submit">
              Submit
            </button>
          </form>
        </div>
      )}
      {!userInfo && (
        <div className="upload-track-container">
          <form
            className="upload-track-form"
            onSubmit={() => {
              displayPleaseLoginAlert();
            }}>
            <div className="download-upload-container">
              <div className="download-track-container">
                <a
                  id="download-link"
                  href={`http://d1nb1e3bp5hs25.cloudfront.net${competition.trackPath}`}
                  title="Download"
                  download>
                  <i className="fas fa-arrow-circle-down down" id="icon" />
                </a>
              </div>
              <label htmlFor="uploader" className="upload-input" title="Upload">
                <i className="fas fa-arrow-circle-up up" id="icon" />
              </label>

              <input
                id="uploader"
                style={{ visibility: "hidden", height: "0", width: "0" }}
                type="file"
                onChange={(event) => {
                  handleFileChange(event);
                }}
                accept=".mp3,audio/*"
              />
            </div>
            <div className="filename-input-container">
              <label style={{ margin: "10px" }} htmlFor="filename-input">
                Filename
              </label>
              <input
                id="filename-input"
                type="text"
                placeholder="i.e. Song Name"
                style={{
                  outline: "none",
                  width: "7.5vw",
                  height: "2.5vh",
                  margin: "0 0 2vh",
                  border: "2px solid black",
                  borderRadius: "5px",
                }}
                onChange={(event) => {
                  handleTextChange(event);
                }}
              />
            </div>
            <button
              className={file ? "submit-button" : "submit-button disabled"}
              title="Submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UploadTrack;
