import "./Olympus.scss";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const Olympus = () => {
  const [january, setJanuary] = useState(null);
  const [february, setFebruary] = useState(null);
  const [tracks, setTracks] = useState(null);
  const { data } = useQuery(GET_ALL_VERSES);

  useEffect(() => {
    if (data) {
      setTracks(data.verses);
    }
  }, [data]);

  useEffect(() => {
    if (tracks) {
      let januaryTracks = tracks.filter((track) => {
        return track.competitionId === 3;
      });
      let sortedJan = januaryTracks.slice().sort((a, b) => {
        return b.voteCount - a.voteCount;
      });

      setJanuary(sortedJan[0]);
    }
  }, [tracks]);

  useEffect(() => {
    if (tracks) {
      let februaryTracks = tracks.filter((track) => {
        return track.competitionId === 2;
      });
      let sortedFeb = februaryTracks.slice().sort((a, b) => {
        return b.voteCount - a.voteCount;
      });
      setFebruary(sortedFeb[0]);
    }
  }, [tracks]);

  const febTracks = (
    <>
      {february && (
        <div className="olympus-track february" key={nanoid()}>
          <img className="olympian-img" src={february.user.image}></img>
          <div className="olympian-audiotrack">
            <div className="olympian-username">
              <h1 className="olympian-song">{february.title}</h1>
              <h2 className="olympian-artist">{february.user.name}</h2>
            </div>
            <audio className="audiotrack" controls>
              <source
                src={`http://d1nb1e3bp5hs25.cloudfront.net${february.audioPath}`}
              />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
        </div>
      )}
    </>
  );

  const janTracks = (
    <>
      {january && (
        <div className="olympus-track january" key={nanoid()}>
          <img className="olympian-img" src={january.user.image}></img>
          <div className="olympian-audiotrack">
            <div className="olympian-username">
              <h1 className="olympian-song">{january.title}</h1>
              <h2 className="olympian-artist">{january.user.name}</h2>
            </div>
            <audio className="audiotrack" controls>
              <source
                src={`http://d1nb1e3bp5hs25.cloudfront.net${january.audioPath}`}
              />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
        </div>
      )}
    </>
  );

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
