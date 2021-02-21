import React from "react";
import "./TrackCard.css";
import userData from "../../assets/_sampleData/sampeUserData";

const TrackCard = () => {

  const trackCards = userData.map((card) => {
    const { id, artist, image, song, link, color } = card;

    return (
      <div key={id} className="trackcard-container">
        <p className="user-order">
          <i className="fa fa-award" style={{color: `${color}`}}></i>

          <img src={image} className="profile-img" />
        </p>

        <p className="track-username">{artist}</p>
      </div>
    );
  });
  return <section className="all-cards-container">{trackCards}</section>;
};

export default TrackCard;
