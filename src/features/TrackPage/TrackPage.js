import React from "react";
import TrackCard from "../TrackCard/TrackCard.js";
import TrackNav from "../TrackNav/TrackNav.js";
import UploadTrack from "../UploadTrack/UploadTrack.js";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";

import "./TrackPage.css";

const TrackPage = () => {
  return (
    <div className="track-page-container">
      <AudioPlayer />
      <TrackNav />
      <TrackCard />
    </div>
  );
};

export default TrackPage;
