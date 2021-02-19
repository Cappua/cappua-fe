import React from "react";
import TrackCard from "../TrackCard/TrackCard.js";
import TrackTitle from "../Tracktitle/TrackTitle.js";
import TrackNav from "../TrackNav/TrackNav.js";
import SoundBar from "../SoundBar/SoundBar.js";

const TrackPage = () => {
  return (
    <div className="track-page-container">
      <TrackTitle />
      <TrackCard />
      <SoundBar />
      <TrackNav />
    </div>
  );
};

export default TrackPage;
