import "./Olympus.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";
import React, { useEffect, useState } from "react";

const Olympus = () => {
  const [olympus, setOlympus] = useState([]);
  const { error, loading, data } = useQuery(GET_ALL_VERSES);
  const [january, setJanuary] = useState([]);
  const [february, setFebruary] = useState([]);

  useEffect(() => {
    if (data) {
      setOlympus(data.verses);
      setJanuary([
        data.verses[0],
      ]);
      setFebruary([
        data.verses[5],
      ]);
    }
  }, [data]);

  const janTracks = january.map((card, i) => {
    const { user, artist, audioPath, title, voteCount } = card;
    return (
      <div className="olympus-track january" key={user.name}>
        <img className="olympian-img" src={user.image}></img>
        <div>{user.name}</div>
      </div>
    );
  });

  const febTracks = february.map((card, i) => {
    const { user, artist, audioPath, title, voteCount } = card;
    return (
      <div className="olympus-track february" key={user.name}>
        <img className="olympian-img" src={user.image}></img>
        <div>{user.name}</div>
      </div>
    );
  });

  return (
    <section id="hall-of-fame">
      <header id="olympus-title">
        Hall Of Fame<b>Olympus</b>
      </header>
      <div className="wrapper">
        <div className="olympus-container">
          <input
            className="checkbox-all"
            id="all"
            type="radio"
            name="checkbox"
            // checked
          />
          <label htmlFor="all">all</label>

          <input
            className="checkbox-january"
            id="january"
            type="radio"
            name="checkbox"
          />
          <label htmlFor="january">January</label>

          <input
            className="checkbox-february"
            id="february"
            type="radio"
            name="checkbox"
          />
          <label htmlFor="february">February</label>
          <div className="olympus">
            {febTracks}
            {janTracks}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Olympus;
