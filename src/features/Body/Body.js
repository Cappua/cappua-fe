import React from "react";
import "./Body.css";

function Body() {
  const getPreviousMonth = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    const previousMonth = date.toLocaleString("default", { month: "long" });
    return previousMonth;
  };
  return (
    <div className="body-container">
      <div className="body-text">
        <div className="body-title">
          <h2 className="winner-name">J Murray</h2>
          <h3 className="month"> {getPreviousMonth()}'s Winner</h3>
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
