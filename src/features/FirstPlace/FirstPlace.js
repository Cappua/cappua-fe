
import "./FirstPlace.css";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_VERSES } from "../../GraphQL/queries.js";

const FirstPlace = () => {
  const [tracks, setTracks] = useState(null);
  const [sortedTrack, setSortedTrack] = useState(null);
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
      setSortedTrack(sorted[0]);
    }
  }, [tracks]);

  return (
    <section id="first">
      <section key="1" id="first-place-winner">
        {sortedTrack && (
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                rhoncus rutrum risus eget efficitur. Nullam dignissim erat
                mollis tristique placerat. Nunc fermentum nisi justo, sit amet
                vestibulum ante bibendum non. Cras molestie fringilla ex, vel
                porttitor nisi rhoncus non. Aliquam eu nunc nec turpis semper
                malesuada quis sit amet odio.istique placerat. Nunc fermentum
                nisi justo, sit amet vestibulum ante bibendum non. Cras molestie
                fringilla ex, vel porttitor nisi rhoncus non. Aliquam eu nunc
                nec turpis semper malesuada quis sit amet odio.istique placerat.
                Nunc fermentum nisi justo, sit amet vestibulum ante bibendum
                non. Cras molestie fringilla ex, vel porttitor nisi rhoncus non.
                Aliquam eu nunc nec turpis semper malesuada quis sit amet odio.
              </p>
            </div>
            <img
              id="winner-image"
              src={sortedTrack.user.image}
              // src="https://thispersondoesnotexist.com/image"
              alt="winner-img"
            />
          </div>
        )}
      </section>
    </section>
  );
};

export default FirstPlace;
