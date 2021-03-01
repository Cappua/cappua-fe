import "./Trio.css";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";
const Trio = () => {
  const [tracks, setTracks] = useState(null);
  const [trio, setTrio] = useState([]);
  const { error, loading, data } = useQuery(GET_ALL_VERSES);

  useEffect(() => {
    if (data) {
      setTracks(data.verses);
    }
  }, [data]);

  useEffect(() => {
    if (tracks) {
      let sorted = tracks.slice().sort((a, b) => {
        return b.voteCount - a.voteCount;
      });
      setTrio([sorted[0], sorted[1], sorted[2]]);
    }
  }, [tracks]);
  const trioTabs = trio.map((card, i) => {
    const { user, artist, audioPath, title, voteCount } = card;
    return (
      <section className="tab-container" key={nanoid()} id={nanoid()}>
        <a className="tab-img-container">
          <img className="tab-img" src={user.image} alt="project-img" />
        </a>
        <div className="tab-details">
          <h1 id="tab-vote">Vote on the beat!</h1>
          <h2 id="tab-artist">{user.name}</h2>
          <h3 id="tab-song">{title}</h3>
          <Link to="/competitions">
            <button className="tab-btn">Listen Here</button>
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
};
export default Trio;
