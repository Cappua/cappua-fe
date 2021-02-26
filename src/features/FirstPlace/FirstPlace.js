import React from "react";
import userData from "../../assets/_sampleData/sampeUserData";
import "./FirstPlace.css";
import AudioPlayer from "../AudioPlayer/AudioPlayer.js";

function FirstPlace() {
  let sortedUsers = userData.sort((a, b) => {
    return b.votes - a.votes;
  });
  sortedUsers = [sortedUsers[0]];
  let winner = sortedUsers.map((card, i) => {
    const { id, artist, image, song, link, votes } = card;
    return (
      <section id="first-place-winner">
        <div id="winner-container">
          <div id="winner-info-container">
            <div id="winner-info">
              <i className={`fa fa-award top-${i} `} id="medallion" />
              <div id="artist-song">
                <h2 id="first-place-song">{song}</h2>
                <h2 id="first-place-artist">by {artist}</h2>
              </div>
            </div>
            <p id="winner-details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              rhoncus rutrum risus eget efficitur. Nullam dignissim erat mollis
              tristique placerat. Nunc fermentum nisi justo, sit amet vestibulum
              ante bibendum non. Cras molestie fringilla ex, vel porttitor nisi
              rhoncus non. Aliquam eu nunc nec turpis semper malesuada quis sit
              amet odio.istique placerat. Nunc fermentum nisi justo, sit amet
              vestibulum ante bibendum non. Cras molestie fringilla ex, vel
              porttitor nisi rhoncus non. Aliquam eu nunc nec turpis semper
              malesuada quis sit amet odio.istique placerat. Nunc fermentum nisi
              justo, sit amet vestibulum ante bibendum non. Cras molestie
              fringilla ex, vel porttitor nisi rhoncus non. Aliquam eu nunc nec
              turpis semper malesuada quis sit amet odio.
            </p>
          </div>
          <img
            id="winner-image"
            src={"https://picsum.photos/1000?" + Math.random()}
            // src={image}
            alt="body-img"
          />
        </div>
        {/* <AudioPlayer /> */}
      </section>
    );
  });

  return <section id="first">{winner}</section>;
}

export default FirstPlace;
