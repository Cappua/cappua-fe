import React, { useEffect, useState } from "react";
import "./TrackCards.css";
import userData from "../../assets/_sampleData/sampeUserData";
import dylon from "../../assets/dylon.mp3";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";
import AlbumCard from "../AlbumCard/AlbumCard.js";

const TrackCards = () => {
  const [tracks, setTracks] = useState([]);
  const { error, loading, data } = useQuery(GET_ALL_VERSES);

  useEffect(() => {
    if (data) {
      const sortedTracks = () =>
        data.verses.sort(function (a, b) {
          return b.votes - a.votes;
        });
      setTracks(sortedTracks);
    }
  }, [data]);

  let trackCards = tracks.map((card, i) => {
    const { id, artist, image, audioPath, link, votes } = card;
    return (
      <section key={i} className="trackcards-container">
        <div className="trackcards">
          <p className="user-order">
            <i className={i <= 2 ? `fa fa-award top-${i}` : ""}></i>
            <img src={image} className="profile-img" />
          </p>
          <div className="audio-container">
            <div className="track-username">
              <h1 className="track-title">{audioPath}</h1>
              <h1 className="track-artist">{artist}</h1>
            </div>
            <audio className="audiotrack" controls>
              <source
                src={`https://testabucketblazeit.s3-us-west-1.amazonaws.com/${audioPath}`}
              />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
          <div className="play-count">
            <h1 className="votes" id={id}>
              {votes}
            </h1>
            <i className="fas fa-long-arrow-alt-up vote-icon" id={id}></i>
          </div>
        </div>
      </section>
    );
  });
if(trackCards.length === 0){
  return (
    <section id="no-tracks-message">
      <h1>Currently, there are no tracks uploaded to this competition yet.</h1>

      <h2 id="motiv"> Be the first!</h2>
      {/* <AlbumCard /> */}
    </section>
  );
}else{
  return <section className="all-cards-container">{trackCards}</section>;
}
};

export default TrackCards;
