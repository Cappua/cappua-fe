import React from "react";
import TrackCard from "../TrackCards/TrackCards.js";
import TrackNav from "../TrackNav/TrackNav.js";
import UploadTrack from "../UploadTrack/UploadTrack.js";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";
import Theme from "../Theme/Theme.js";
import "./Competition.css";
import AlbumCard from "../AlbumCard/AlbumCard.js";

const TrackPage = () => {
  return (
    <section className="track-page-container">
      <div className="theme-container">
        {/* <AlbumCard /> */}
        <Theme />
      </div>
      <AudioPlayer />
      <UploadTrack />
      <TrackNav />
      <TrackCard />
    </section>
  );
};

export default TrackPage;
