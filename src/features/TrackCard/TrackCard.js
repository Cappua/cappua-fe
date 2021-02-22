import React from "react";
import "./TrackCard.css";
import userData from "../../assets/_sampleData/sampeUserData";
import dylon from "../../assets/dylon.mp3";

const TrackCard = () => {
  const trackCards = userData.map((card, i) => {
    const { id, artist, image, song, link, color } = card;

    return (
      <section className={`trackcard-container trackcard-container-${i}`}>
        <div key={i} className={`trackcard trackcard-${i}`}>
          <p className="user-order">
            <img src={image} className="profile-img" />
          </p>
          <p className={`track-username track-username-${i}`}>
            {song} - {artist}
          </p>
          <div className="audio-container">
            <audio className="audiotrack" controls>
              <source src={dylon} />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
          <p className={`play-count play-count-${i}`}>2657</p>
        </div>
      </section>
    );
  });
  return <section className="all-cards-container">{trackCards}</section>;
};

export default TrackCard;
