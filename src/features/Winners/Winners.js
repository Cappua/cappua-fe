import React from "react";
import "./Winners.css";
import userData from "../../assets/_sampleData/sampeUserData";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";
import FirstPlace from "../FirstPlace/FirstPlace.js";
import AnimatedArrows from "../AnimatedArrows/AnimatedArrows.js";
import SoundWave from "../SoundWave/SoundWave";

function Winners() {
  const getPreviousMonth = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    const previousMonth = date.toLocaleString("default", { month: "long" });
    return previousMonth;
  };

  let ordinal = (n) => {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  let sortedUsers = userData.sort((a, b) => {
    return b.votes - a.votes;
  });
  sortedUsers = [sortedUsers[1], sortedUsers[2]];
  let winners = sortedUsers.map((card, i) => {
    const { id, artist, image, song, link, votes } = card;
    return (
      <section>
        <div key={i} className="contender-container">
          <div className="medallion-holder">
            <i className={`fa fa-award top-${i + 1} medallion`}></i>
          </div>
          <div className="play-holder">
            <h1 className="ordinal">{ordinal(i + 2)}</h1>
            <i className="fa fa-play play-button" />
          </div>
          <div className="username-holder">
            <div>
              <div className="contender-track">{song}</div>
              <div className="contender-artist">by {artist}</div>
            </div>
          </div>
        </div>
        <div className="contender-votes">
          {/* <SoundWave /> */}

          {votes}
          <i className="fas fa-heart heart-icon"></i>
        </div>
      </section>
    );
  });

  return (
    <div className="winners-page">
      <header>
        {getPreviousMonth()}'s Competition<b>Winners</b>
        <AnimatedArrows />
      </header>
      <FirstPlace />
      <AudioPlayer />
      <h1 id="runner-ups-title">- Runner Ups -</h1>
      <section id="runner-ups">{winners}</section>
    </div>
  );
}

export default Winners;
