import React from "react";
import "./Announcement.css";

export default function Announcement() {
  return (
    <div className="announce-container">
      <img
        className="announce-image"
        src={"https://picsum.photos/1000?" + Math.random()}
        alt="body-img"
      />
      <div className="announce-text">
        <div className="announcement-header">
          <h2 className="header">Big company announcement</h2>
        </div>
        <p className="announcement">
          Big company announcement or simple sub-header taking two or more
          lines.
        </p>
        <button className="btn">Button</button>
      </div>
    </div>
  );
}
