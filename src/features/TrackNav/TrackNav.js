import React from "react";
import "./TrackNav.css";
import searchIcon from "../../assets/searchIcon.png";

const TrackNav = () => {
  return (
    <div className="tracknav-container">
      <h3 className="the-ranks-title">The Ranks</h3>
      <div className="track-sort-container">
        <form className="search-the-ranks-form">
          <input
            type="text"
            className="search-the-ranks"
            placeholder="Search the ranks"
          />
          <button className="search-the-ranks-button">
            <img src={searchIcon} height="25px" width="25px" />
          </button>
        </form>
        <select className="track-sort-dropdown">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default TrackNav;
