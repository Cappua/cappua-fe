import React from "react";
import TrackCard from "../TrackCard/TrackCard.js";
import TrackNav from "../TrackNav/TrackNav.js";
import UploadTrack from "../UploadTrack/UploadTrack.js";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";
import "./TrackPage.css";
import AlbumCard from "../AlbumCard/AlbumCard.js";

const TrackPage = () => {
  return (
    <section className="track-page-container">
      <AlbumCard />
      <AudioPlayer />
      <TrackNav />
      <TrackCard />
    </section>
  );
};

export default TrackPage;
