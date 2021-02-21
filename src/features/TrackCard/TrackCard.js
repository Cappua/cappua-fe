import React from "react";
import "./TrackCard.css";
import userData from "../../assets/_sampleData/sampeUserData";

const TrackCard = () => {
  const ordinal = (n) => {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return (s[(v - 20) % 10] || s[v] || s[0]);
  }


  const trackCards = userData.map((card) => {
    const { id, artist, image, song, link } = card;

    return (
      <div
        key={id}
        className="trackcard-container"
      >
        <p className="user-order">
          <p className="trackcard-place">{id}<sup>{ordinal(id)}</sup></p>
          <img src={image} className="profile-img" />
        </p>

        <p className="track-username">{artist}</p>
      </div>
    );
  });
  return <section className="all-cards-container">{trackCards}</section>;
};

export default TrackCard;
