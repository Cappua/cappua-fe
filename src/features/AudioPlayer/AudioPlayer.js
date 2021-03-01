import React, { useContext } from "react";
import Song from "./Song";
import "./audioPlayer.css";
import { CompetitionContext } from "../../CompetitionContext";

const AudioPlayer = () => {
  const context = useContext(CompetitionContext);

  return (
    <section id="player-container">
      <div className="player">
        <Song songName="Protect Ya Neck" songArtist="Wu-Tang Clan" />
        <audio id="audio" controls>
          <source
            src={`http://d1nb1e3bp5hs25.cloudfront.net${context.trackPath}`}
          />
          Your browser does not support the <code>audio</code> element.
        </audio>
      </div>
    </section>
  );
};

export default AudioPlayer;
