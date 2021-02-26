import React from "react";
import "./Trio.css";
import trioData from "../../assets/_sampleData/trioData";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

function Trio() {
  const trioTabs = trioData.map((tab) => {
    const { id, artist, image, song, link } = tab;

    return (
      <section className="tab-container" key={nanoid()} id={id}>
        <a className="tab-img-container" href={link}>
          <img
            className="tab-img"
            src={image}
            key={id}
            id={id}
            alt="project-img"
          />
        </a>
        <div className="tab-details" key={id}>
          <h1 id="tab-vote">Vote on the beat!</h1>
          <h2 id="tab-artist">{artist}</h2>
          <h3 id="tab-song">{song}</h3>
          <Link to={link}>
            <button className="tab-btn" href={link}>
              Listen Here
            </button>
          </Link>
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
