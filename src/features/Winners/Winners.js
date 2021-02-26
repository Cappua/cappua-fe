import React from "react";
import "./Winners.css";
import userData from "../../assets/_sampleData/sampeUserData";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";
import FirstPlace from "../FirstPlace/FirstPlace.js";
import AnimatedArrows from '../AnimatedArrows/AnimatedArrows.js';

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
      <div key={i} className="contender-container">
        <div className="medallion-holder">
          <i className={`fa fa-award top-${i +1} medallion`}></i>
        </div>
        <div className="play-holder">
          <h1 className="ordinal">{ordinal(i + 2)}</h1>
          <i className="fa fa-play play-button" />
        </div>
        <div className="username-holder">
          <div className="contender-track">{song}</div>
          <div className="contender-artist">by {artist}</div>
        </div>
        {/* <div className="winner">
          <div className="winner-stats">
            <div className="winner-rank">
              <div className="winner-banner">
                <div className="firework">
                  <div className="before"></div>
                  <div className="after"></div>
                </div>
                <i className={`fa fa-award top-${i} medallion`}></i>
                <h1 className="winner-artist">{artist}</h1>
              </div>
              <div className="winner-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                rhoncus rutrum risus eget efficitur. Nullam dignissim erat
                mollis tristique placerat. Nunc fermentum nisi justo, sit amet
                vestibulum ante bibendum non. Cras molestie fringilla ex, vel
                porttitor nisi rhoncus non. Aliquam eu nunc nec turpis semper
                malesuada quis sit amet odio.istique placerat. Nunc fermentum
                nisi justo, sit amet vestibulum ante bibendum non. Cras molestie
                fringilla ex, vel porttitor nisi rhoncus non. Aliquam eu nunc
                nec turpis semper malesuada quis sit amet odio.istique placerat.
                Nunc fermentum nisi justo, sit amet vestibulum ante bibendum
                non. Cras molestie fringilla ex, vel porttitor nisi rhoncus non.
                Aliquam eu nunc nec turpis semper malesuada quis sit amet odio.
              </div>
            </div>

            <div>
              <img src={image} className="winner-img" alt={artist}/>
            </div>
          </div>
          <div className="winner-audio">
            <div>
              <img src={image} className="winners-icon" alt={artist}/>
            </div>
            <div className="winner-track-container">
              <div className="winning-track-details">
                <h1 className="winning-track-title">{song}</h1>
                <h1 className="winning-track-artist">{artist}</h1>
              </div>
              <audio className="winners-audiotrack" controls>
                <source src={dylon} />
                Your browser does not support the <code>audio</code> element.
              </audio>
            </div>
          </div>
    </div> */}
      </div>
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
