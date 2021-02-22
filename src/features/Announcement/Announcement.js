import React from "react";
import "./Announcement.css";
import { Link } from "react-router-dom";

export default function Announcement() {
  return (
    <div className="announce-container">
      <img
        className="announce-image"
        src={"https://picsum.photos/1000?" + Math.random()}
        alt="body-img"
      />
      <div className="announce-text">
          <h2 className="header">Big company announcement</h2>
        <p className="announcement">
          Big company announcement or simple sub-header taking two or more
          lines.
        </p>
        <Link to="/announcement" className="announcement-btn">
          Button
        </Link>
      </div>
    </div>
  );
}
