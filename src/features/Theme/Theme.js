import React from "react";

import "./Theme.css";
function Theme() {
  const getMonth = () => {
    let date = new Date();
    let month = date.toLocaleString("default", { month: "long" });
    return month;
  };
  const getRemainingDays = () => {
    let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    let days =
      time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
    return <div id="days">{days}</div>;
  };

  const getGenres = () => {
    const genres = [
      "Hip-Hop",
      "R&B",
      "Rap",
      "Old School",
      "Boom-Bap",
      "Trap",
      "Country Trap",
      "Crunk",
      "Emo Rap",
      "Grime",
      "Hyphy",
      "Lo-Fi Hip-Hop",
      "Footwork",
      "UK Drill",
      "Rap Rock",
    ];
    const randomize = genres.sort(() => {
      return 0.5 - Math.random();
    });
    return (
      <div id="genre-themes">
        This month's theme is {randomize[0]}, {randomize[1]}, and {randomize[2]}.
      </div>
    );
  };

  return (
    <section to="/theme" className="theme">
      <h1 id="month-theme">{getMonth()}'s Competition</h1>
      <h2 id="genre-themes">{getGenres()}</h2>
    </section>
  );
}

export default Theme;
