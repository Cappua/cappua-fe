import React from "react";
import TrackCards from "../TrackCards/TrackCards.js";
import UploadTrack from "../UploadTrack/UploadTrack.js";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";
import Theme from "../Theme/Theme.js";
import "./Competition.css";

const Competition = () => {
  return (
    <section className="track-page-container">
      <div className="theme-container">
        <Theme />
      </div>
      <AudioPlayer />
      <UploadTrack />
      <TrackCards />
    </section>
  );
};

export default Competition;
