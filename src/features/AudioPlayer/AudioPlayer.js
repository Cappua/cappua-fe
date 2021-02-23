import React from "react";
import Song from "./Song";
import "./audioPlayer.css";
import wutang from "./wutang.mp3";

function AudioPlayer() {
  return (
    <div className="player">
      <Song songName="Protect Ya Neck" songArtist="Wu-Tang Clan" />
      <audio id="audio" controls>
        <source src={wutang} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
