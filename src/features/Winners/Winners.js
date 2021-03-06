import "./Winners.css";
import FirstPlace from "../FirstPlace/FirstPlace.js";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";

const Winners = () => {
  const [tracks, setTracks] = useState(null);
  const [contenders, setContenders] = useState([]);
  const { data } = useQuery(GET_ALL_VERSES);

  useEffect(() => {
    if (data) {
      setTracks(data.verses);
    }
  }, [data]);

  useEffect(() => {
    if (tracks) {
      let februaryTracks = tracks.filter((track) => {
        return track.competitionId === 2;
      });
      let sorted = februaryTracks.slice().sort((a, b) => {
        return b.voteCount - a.voteCount;
      });
      setContenders([sorted[1], sorted[2]]);
    }
  }, [tracks]);

  const getPreviousMonth = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    const previousMonth = date.toLocaleString("default", { month: "long" });
    return previousMonth;
  };

  let ordinal = (n) => {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  let winners = contenders.map((card, i) => {
    const { user, artist, audioPath, title, voteCount } = card;

    return (
      <section key={i}>
        <div className="contender-container">
          <div className="medallion-holder">
            <i className={`fa fa-award top-${i + 1} medallion`}></i>
          </div>
          <div className="play-holder">
            <h1 className="ordinal">{ordinal(i + 2)}</h1>
          </div>
          <div className="username-holder">
            <div>
              <div className="contender-track">{title}</div>
              <div className="contender-artist">by {user.name}</div>
            </div>
          </div>
        </div>
        <div className="contender-votes">
          <img className="contender-icon" src={user.image}></img>
          <audio className="contender-audiotrack" controls>
            <source src={`http://d1nb1e3bp5hs25.cloudfront.net${audioPath}`} />
          </audio>
          <div className="vote-count">
            <i className="fas fa-heart heart-icon"></i>
            {voteCount}
          </div>
        </div>
      </section>
    );
  });

  return (
    <div className="winners-page">
      <header>
        {getPreviousMonth()}'s<b>Winners</b>
      </header>
      <FirstPlace />
      <h1 id="runner-ups-title">- Runner Ups -</h1>
      <section id="runner-ups">{winners}</section>
    </div>
  );
};

export default Winners;
