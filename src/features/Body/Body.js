import "./Body.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";

const Body = () => {
  const [tracks, setTracks] = useState(null);
  const [sortedTrack, setSortedTrack] = useState(null);
  const { data } = useQuery(GET_ALL_VERSES);

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
      setSortedTrack(sorted[0]);
    }
  }, [tracks]);

  const getPreviousMonth = () => {
    let date = new Date();
    date.setMonth(date.getMonth() - 1);
    const previousMonth = date.toLocaleString("default", { month: "long" });
    return previousMonth;
  };
  return (
    <>
      {sortedTrack && (
        <section className="body-fridge">
          <div className="body-container">
            <div className="body-text">
              <div className="body-title">
                <h3 className="month">{getPreviousMonth()}'s Winner</h3>
                <h3 className="winner-name">{sortedTrack.user.name}</h3>
              </div>
              <p className="winner-details">
                With their long range flow and lyrical layups, {""}
                {sortedTrack.user.name} is your January champion!
                <br />
                <br />
                <Link id="read-more" to="/winners">
                  Read More...
                </Link>
              </p>
            </div>
            <img
              className="body-image"
              src={sortedTrack.user.image}
              alt="body-img"
            />
          </div>

          <div id="audio-container">
            <div id="track-username">
              <h1 id="track-title">{sortedTrack.title}</h1>
              <h1 id="track-artist">by {sortedTrack.user.name}</h1>
            </div>
            <audio id="audiotrack" controls>
              <source
                src={`http://d1nb1e3bp5hs25.cloudfront.net${sortedTrack.audioPath}`}
              />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
        </section>
      )}
    </>
  );
};

export default Body;
