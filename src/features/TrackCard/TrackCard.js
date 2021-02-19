import React from "react";
import "./TrackCard.css";
import samplePic1 from "../../assets/_sampleData/sampleUser1.jpg";
import samplePic2 from "../../assets/_sampleData/sampleUser2.jpg";
import samplePic3 from "../../assets/_sampleData/sampleUser3.jpg";
import samplePic4 from "../../assets/_sampleData/mad_villan.png";

const TrackCard = () => {
  return (
    <div className="all-cards-container">
      <div className="trackcard-container-standard trackcard-container-1">
        <p className="trackcard-place">1</p>
        <img src={samplePic1} className="profile-img" />
        <p className="username">sampleusername1</p>
      </div>
      <div className="trackcard-container-standard trackcard-container-2">
        <p className="trackcard-place">2</p>
        <img src={samplePic2} className="profile-img" />
        <p className="username">sampleusername2</p>
      </div>
      <div className="trackcard-container-standard trackcard-container-3">
        <p className="trackcard-place">3</p>
        <img src={samplePic3} className="profile-img" />
        <p className="username">sampleusername3</p>
      </div>
      <div className="trackcard-container-standard">
        <p className="trackcard-place">4</p>
        <img src={samplePic4} className="profile-img" />
        <p className="username">sampleusername3</p>
      </div>
    </div>
  );
};

export default TrackCard;
