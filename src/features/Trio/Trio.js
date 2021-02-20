import React from "react";
import "./Trio.css";
import trioData from "../../Utilities/trioData";
import { nanoid } from "nanoid";

function Trio() {
  const trioTabs = trioData.map((tab) => {
    const { id, artist, image, song, link } = tab;
    return (
      <section className="tab-container" key={nanoid()} id={id}>
        <a href={link}>
          <img
            className="tab-img"
            src={image}
            key={id}
            id={id}
            alt="project-img"
          />
        </a>
        <div className="tab-details" key={id}>
          {/* <h1 id="tab-song">
            Vote on {artist}'s beat - {song}
          </h1> */}
          <h1 id="tab-vote">Vote on the beat!</h1>
          <h2 id="tab-artist">{artist}</h2>
          <h3 id="tab-song">{song}</h3>
          {/* <div id="tab-btn-container"> */}
            <button className="tab-btn" href={link}>
              Listen Here
            </button>
          {/* </div> */}
        </div>
      </section>
    );
  });
  return (
    <section className="trio-container">
      <h1 id="featured-title">- Featured Artists -</h1>
      <section className="featured-artists">{trioTabs}</section>
    </section>
  );
}

export default Trio;
