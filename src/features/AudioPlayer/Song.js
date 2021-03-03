import React, { useContext } from "react";
import { CompetitionContext } from "../../CompetitionContext";
import "./audioPlayer.css";

const Song = () => {
  const competitionInfo = useContext(CompetitionContext);

  return (
    <div className="song">
      <h1 className="song-title">{competitionInfo.title}</h1>
      <h2 className="song-artist">{competitionInfo.genre}</h2>
    </div>
  );
};

export default Song;
