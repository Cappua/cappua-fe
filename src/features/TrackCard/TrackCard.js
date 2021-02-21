import React from "react";
import "./TrackCard.css";
import userData from "../../assets/_sampleData/sampeUserData";
// import AudioPlayer from "../AudioPlayer/AudioPlayer";
import dylon from "../../assets/dylon.mp3";

const TrackCard = () => {
  const trackCards = userData.map((card) => {
    const { id, artist, image, song, link, color } = card;

    return (
      <section
        className="trackcard-container"
        style={{
          background: `url(${image}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <div
          key={id}
          className="trackcard"
          style={{
            backdropFilter: "blur(30px)",
          }}
        >
          <p className="user-order">
            <i className={color ? `fa fa-award` : ''} style={{ color: `${color}` }}></i> 
            

            <img src={image} className="profile-img" />
          </p>
          <div className="audio-container">
            <audio className="audiotrack" controls>
              <source src={dylon} />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
          <p className="track-username">{song} - {artist}</p>
        </div>
      </section>
    );
  });
  return <section className="all-cards-container">{trackCards}</section>;
};

export default TrackCard;
