import React, { useEffect, useState, useContext } from "react";
import Upvote from "../../features/Upvote/Upvote";
import "./TrackCards.css";
import { CompetitionContext } from "../../CompetitionContext";

const TrackCards = () => {
  const [tracks, setTracks] = useState([]);
  const [sortedTracks, setSortedTracks] = useState([]);
  const currentCompetitionContext = useContext(CompetitionContext);

  useEffect(() => {
    if (currentCompetitionContext) {
      setTracks(currentCompetitionContext.verses);
    }
  }, [currentCompetitionContext]);

  useEffect(() => {
    let sorted = tracks.slice().sort((a, b) => {
      return b.voteCount - a.voteCount;
    });
    setSortedTracks(sorted);
  }, [tracks.length]);

  let trackCards = sortedTracks.map((card, i) => {
    const { user, id, audioPath, title, voteCount } = card;

    return (
      <section key={i} id={id} className="trackcards-container">
        <div className="trackcards">
          <div className="user-order">
            <i
              className={
                i <= 2 ? `fa fa-award top-${i}` : "fa fa-award invisible"
              }
            />
            <div className="profile-img-container">
              <img
                src={
                  user.image
                    ? user.image
                    : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
                }
                className="profile-img"
              />
            </div>
          </div>
          <div className="audio-container">
            <div className="track-username">
              <h1 className="track-title">{title}</h1>
              <h1 className="track-artist">{user.name}</h1>
            </div>
            <audio className="audiotrack" controls>
              <source
                src={`http://d1nb1e3bp5hs25.cloudfront.net${audioPath}`}
              />
              Your browser does not support the <code>audio</code> element.
            </audio>
          </div>
          <div className="play-count">
            <h1 className="votes" id={user.id}>
              {voteCount}
            </h1>
            <Upvote userId={user.id} verseId={id} />
          </div>
        </div>
      </section>
    );
  });
  if (trackCards.length === 0) {
    return (
      <section id="no-tracks-message">
        <h1>
          Currently, there are no tracks uploaded to this competition yet.
        </h1>

        <h2 id="motiv"> Be the first!</h2>
      </section>
    );
  } else {
    return <section className="all-cards-container">{trackCards}</section>;
  }
};

export default TrackCards;
