import React from "react";
import ReactPlayer from "react-player";
import "./SoundBar.css";

export default function SoundBar() {
  return (
    <div className="soundbar-container">
      <ReactPlayer
        className="soundbar"
        style={{ width: "100%", height: "20vh" }}
        url="https://www.mixcloud.com/glibstylez/dj-glibstylez-dilla-dedication-producers-edition/"
        controls
      />
    </div>
  );
}
