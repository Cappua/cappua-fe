import "./FirstPlace.css";
import React, { useEffect, useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";


const FirstPlace = () => {
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
      let februaryTracks = tracks.filter((track) => {
        return track.competitionId === 2;
      });
      let sorted = februaryTracks.slice().sort((a, b) => {
        return b.voteCount - a.voteCount;
      });
      setSortedTrack(sorted[0]);
    }
  }, [tracks]);
  return (
    <>
      {sortedTrack && (
        <section id="first">
          <section key="1" id="first-place-winner">
            <div id="winner-container">
              <div id="winner-info-container">
                <div id="winner-info">
                  <i className={`fa fa-award top-0`} id="medallion" />
                  <div id="artist-song">
                    <h2 id="first-place-song">{sortedTrack.title}</h2>
                    <h2 id="first-place-artist">by {sortedTrack.user.name}</h2>
                  </div>
                </div>
                <p id="winner-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean rhoncus rutrum risus eget efficitur. Nullam dignissim
                  erat mollis tristique placerat. Nunc fermentum nisi justo, sit
                  amet vestibulum ante bibendum non. Cras molestie fringilla ex,
                  vel porttitor nisi rhoncus non. Aliquam eu nunc nec turpis
                  semper malesuada quis sit amet odio.istique placerat. Nunc
                  fermentum nisi justo, sit amet vestibulum ante bibendum non.
                  Cras molestie fringilla ex, vel porttitor nisi rhoncus non.
                  Aliquam eu nunc nec turpis semper malesuada quis sit amet
                  odio.istique placerat. Nunc fermentum nisi justo, sit amet
                  vestibulum ante bibendum non. Cras molestie fringilla ex, vel
                  porttitor nisi rhoncus non. Aliquam eu nunc nec turpis semper
                  malesuada quis sit amet odio.
                </p>
              </div>
              <img
                id="winner-image"
                src={sortedTrack.user.image}
                alt="winner-img"
              />
            </div>
          </section>
          <div id="audio-container">
            <div id="track-username">
              <h1 id="track-title">{sortedTrack.title}</h1>
              <h1 id="track-artist">{sortedTrack.user.name}</h1>
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

export default FirstPlace;
