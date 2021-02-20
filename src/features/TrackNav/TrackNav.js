import React from 'react'
import './TrackNav.css';

const TrackNav = () => {
  return (
    <div className="tracknav-container">
      <h3 className="contributors-title">Contributors</h3>
      <div className="track-sort-container">
        <input type="search" className="search-contributors"/>
        <select className="track-sort-dropdown">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>
    </div>
  )
}

export default TrackNav;