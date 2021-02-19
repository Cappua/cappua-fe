import React from "react";
import TrackCard from "../TrackCard/TrackCard.js";
import InstrumentalsArtwork from "../InstrumentalsArtwork/InstrumentalArtwork.js";
import TrackNav from "../TrackNav/TrackNav.js";
import SoundBar from "../SoundBar/SoundBar.js";
import UploadTrack from "../UploadTrack/UploadTrack.js";
import "./TrackPage.css";

const TrackPage = () => {
  return (
    <div className="track-page-container">
      <section className="title-uploader-container">
        <InstrumentalsArtwork />
        <UploadTrack />
      </section>
      <TrackCard />
      <SoundBar />
      <TrackNav />
    </div>
  );
};

export default TrackPage;
