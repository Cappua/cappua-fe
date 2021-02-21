import React from "react";
import "./TrackNav.css";
import searchIcon from "../../assets/searchIcon.png";

const TrackNav = () => {
  return (
    <section className="tracknav-container">      
      <div className="track-sort-container">
        <h3 className="the-ranks-title">The Ranks</h3>

        <div class="search-sort-container">
          <form className="search-ranks-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search The Ranks"
            />
            <a class="search-btn">
              <i class="fas fa-search" />
            </a>
          </form>
          <select className="track-sort-dropdown">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>


      </div>
    </section>
  );
};

export default TrackNav;
