import React from "react";
import "./TrackCard.css";
import userData from "../../assets/_sampleData/sampeUserData";
import dylon from "../../assets/dylon.mp3";

const TrackCard = () => {
  let sortedUsers = userData.sort(function (a, b) {
    return b.votes - a.votes;
  });
  let trackCards = sortedUsers.map((card, i) => {
    console.log(i);
    const { id, artist, image, song, link, votes } = card;

    return (
      <section key={i} className="trackcard-container">
        <div className="trackcard trackcard">
          <p className="user-order">
            <i className={i <= 2 ? `fa fa-award top-${i}` : ""}></i>
            <img src={image} className="profile-img" />
          </p>
          <div className="audio-container">
            <p className="track-username">
              <h1 className="track-title">{song}</h1>
              <h1 className="track-artist">{artist}</h1>
            </p>
            <audio className="audiotrack" controls>
              <source src={dylon} />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
          <p className={`play-count play-count-${i}`}>{votes}</p>
        </div>
      </section>
    );
  });
  return <section className="all-cards-container">{trackCards}</section>;
};

export default TrackCard;
