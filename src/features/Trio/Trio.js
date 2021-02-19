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
          <p id="tab-song">Vote on {artist}'s beat - {song}</p>
        </div>
        <div id="tab-btn">
          <button className="tab-btn" href={link}>
            Check it out!
          </button>
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
