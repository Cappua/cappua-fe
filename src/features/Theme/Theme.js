import React, { useContext } from "react";
import { CompetitionContext } from "../../CompetitionContext";
import "./Theme.css";

const Theme = () => {
  const competitionInfo = useContext(CompetitionContext);
  const getMonth = () => {
    let date = new Date();
    let month = date.toLocaleString("default", { month: "long" });
    return month;
  };

  return (
    <section to="/theme" className="theme">
      <h1 id="month-theme">{getMonth()}'s Competition</h1>
      <div id="genre-themes">
        This month's theme is {competitionInfo.description}
      </div>
    </section>
  );
};

export default Theme;
