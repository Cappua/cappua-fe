import "./Olympus.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";
import React, { useEffect, useState } from "react";

const Olympus = () => {
  // const [olympus, setOlympus] = useState([]);
  const { error, loading, data } = useQuery(GET_ALL_VERSES);
  const [january, setJanuary] = useState([]);
  const [february, setFebruary] = useState([]);

  // const [tracks, setTracks] = useState(null);
  // const [trio, setTrio] = useState([]);
  // const { error, loading, data } = useQuery(GET_ALL_VERSES);

  //   useEffect(() => {
  //     if (data) {
  //       setTracks(data.verses);
  //     }
  //   }, [data]);

  //   useEffect(() => {
  //     if (tracks) {
  //       let sorted = tracks.slice().sort((a, b) => {
  //         return b.voteCount - a.voteCount;
  //       });
  //       setTrio([sorted[0], sorted[1], sorted[2]]);
  //     }
  //   }, [tracks]);

  useEffect(() => {
    if (data) {
      // setOlympus(data.verses);
      setJanuary([data.verses[0]]);
      setFebruary([data.verses[5]]);
    }
  }, [data]);

  const janTracks = january.map((card, i) => {
    const { user, audioPath, title} = card;
    return (
      <div className="olympus-track january" key={i} id={i + 1}>
        <img className="olympian-img" src={user.image}></img>
        <div className="olympian-audiotrack">
          <div className="olympian-username">
            <h1 className="olympian-song">{title}</h1>
            <h1 className="olympian-artist">{user.name}</h1>
          </div>
          <audio className="audiotrack" controls>
            <source src={`http://d1nb1e3bp5hs25.cloudfront.net${audioPath}`} />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
      </div>
    );
  });

  const febTracks = february.map((card, i) => {
    const { user, audioPath, title } = card;
    return (
      <div className="olympus-track february" key={i} id={i + 1}>
        <img className="olympian-img" src={user.image}></img>
        <div className="olympian-audiotrack">
          <div className="olympian-username">
            <h1 className="olympian-song">{title}</h1>
            <h2 className="olympian-artist">{user.name}</h2>
          </div>
          <audio className="audiotrack" controls>
            <source src={`http://d1nb1e3bp5hs25.cloudfront.net${audioPath}`} />
            Your browser does not support the <code>audio</code> element.
          </audio>
        </div>
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
          <label htmlFor="all" id="all-title">
            all
          </label>

          <input
            className="checkbox-january"
            id="january"
            type="radio"
            name="checkbox"
          />
          <label htmlFor="january" id="january-title">
            January
          </label>

          <input
            className="checkbox-february"
            id="february"
            type="radio"
            name="checkbox"
          />
          <label htmlFor="february" id="february-title">
            February
          </label>
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
