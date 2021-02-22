import React from "react";
import "./audioPlayer.css";

function Song(props) {
  const { songName, songArtist } = props;
  return (
    <div className="song">
      <h1 className="song-title">{songName}</h1>
      <h2 className="song-artist">{songArtist}</h2>
    </div>
  );
}

export default Song;
