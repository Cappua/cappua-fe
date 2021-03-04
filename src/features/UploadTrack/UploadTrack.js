import React, { useState, useContext, ReactDOM } from "react";
import "./UploadTrack.css";
import axios from "axios";
import UserContext from "../../UserContext";
import { CompetitionContext } from "../../CompetitionContext";
import displayUploadMessage from "./UploadMessage";

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
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setFileName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("audio", file);
    formData.append("user_id", parseInt(userInfo.id));
    formData.append("competition_id", parseInt(competition.id));
    formData.append("type", "verse");
    formData.append("title", fileName);

    axios({
      method: "post",
      url: "https://cappua-be.herokuapp.com/upload",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          let confirmation = window.confirm("Your file has been uploaded.");
          if (confirmation === true) {
            window.location.reload();
          }
        }
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
                onChange={(event) => {
                  handleTextChange(event);
                }}
              />
            </div>
            <button
              onClick={displayUploadMessage}
              className={file ? "submit-button" : "submit-button disabled"}
              title="Submit">
              Submit
            </button>
            <div id="upload-message" className="upload-message">
              <p>Submit Your Verse Here!</p>
            </div>
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
                  title="Download Featured Track"
                  download>
                  <i className="fas fa-arrow-circle-down down" id="icon" />
                </a>
              </div>
              <label
                htmlFor="uploader"
                className="upload-input"
                title="Upload Your Verse">
                <i className="fas fa-arrow-circle-up up" id="icon" />
              </label>

              <input
                id="uploader"
                type="file"
                onChange={(event) => {
                  handleFileChange(event);
                }}
                accept=".mp3,audio/*"
              />
            </div>
            <div className="filename-input-container">
              <label id="track-input-title" htmlFor="filename-input">
                Track Title:
              </label>
              <input
                id="filename-input"
                type="text"
                placeholder="Type in the title of your verse here.."
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
