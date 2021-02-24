import React from "react";
import "./Winners.scss";
import userData from "../../assets/_sampleData/sampeUserData";
import dylon from "../../assets/dylon.mp3";

function Winners() {
  const getMonth = () => {
    let date = new Date();
    let month = date.toLocaleString("default", { month: "long" });
    return month;
  };
  let sortedUsers = userData.sort((a, b) => {
    return b.votes - a.votes;
  });
  sortedUsers = [sortedUsers[0], sortedUsers[1], sortedUsers[2]];
  let winners = sortedUsers.map((card, i) => {
    const { id, artist, image, song, link, votes } = card;
    return (
      <section key={i} className="winner-container">
        {/* <div class="firework">
          <div class="before"></div>
          <div class="after"></div>
        </div> */}
        <div className="winner">
          <div className="winner-stats">
            <div className="winner-rank">
              <div className="winner-banner">
                <div class="firework">
                  <div class="before"></div>
                  <div class="after"></div>
                </div>
                <i className={`fa fa-award top-${i} medallion`}></i>
                <h1 className="winner-artist">{artist}</h1>
              </div>
              <div className="winner-description">
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
              </div>
            </div>

            <div>
              <img src={image} className="winner-img" />
            </div>
          </div>
          <div className="winner-audio">
            <div>
              <img src={image} className="winners-icon" />
            </div>
            <div className="winner-track-container">
              <div className="winning-track-details">
                <h1 className="winning-track-title">{song}</h1>
                <h1 className="winning-track-artist">{artist}</h1>
              </div>
              <audio className="winners-audiotrack" controls>
                <source src={dylon} />
                Your browser does not support the <code>audio</code> element.
              </audio>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return (
    <div className="winners-page">
      <header>
        {getMonth()}'s Competition<b>Winners</b>
      </header>
      <section>{winners}</section>
    </div>
  );
}

export default Winners;
