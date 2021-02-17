import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="body-container">
      <div className="body-text">
        <div className="body-title">
          <h2 className="winner-name">J Murray -</h2>
          <h3 className="month"> January's Winner</h3>
        </div>
        <p className="winner-details">
          With his long range flow and lyrical layups, J Murray is your January
          champion.
        </p>
      </div>
      <img
        className="body-image"
        src={"https://picsum.photos/1000?" + Math.random()}
        alt="body-img"
      />
    </div>
  );
}

export default Body;
