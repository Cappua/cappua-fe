import React from "react";
import "./InstrumentalArtwork.css";
import sampleImageArtwork from "../../assets/wu_tang.jpg";
const InstrumentalArtWork = () => {
  return (
    <div className="instrumental-artwork-container">
      <img src={sampleImageArtwork} className="instrumental-artwork" />
    </div>
  );
};

export default InstrumentalArtWork;
