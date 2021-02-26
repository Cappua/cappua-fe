import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar.js";
import Banner from "./features/Banner/Banner.js";
import Body from "./features/Body/Body.js";
import Trio from "./features/Trio/Trio.js";
import Announcement from "./features/Announcement/Announcement.js";
import TrackPage from "./features/TrackPage/TrackPage.js";
import AudioPlayer from "./features//AudioPlayer/AudioPlayer.js";
import Winners from "./features/Winners/Winners";
import "./App.css";
import { useQuery } from "@apollo/client";
import { CompetitionContext } from "./CompetitionContext";
import { GET_VERSES_BY_COMPETITION } from "./GraphQL/queries";

function App() {
  const [competition, setCompetition] = useState([]);
  const { error, loading, data } = useQuery(GET_VERSES_BY_COMPETITION);

  useEffect(() => {
    setCompetition(data);
  }, [data]);

  return (
    <CompetitionContext.Provider value={competition}>
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Banner />
              <Body />
              <AudioPlayer />
              <Trio />
              <Announcement />
            </>
          )}
        />
        <Route exact path="/competitions" render={() => <TrackPage />} />
        <Route exact path="/winners" render={() => <Winners />} />
      </div>

      {/* <Footer /> */}
    </CompetitionContext.Provider>
  );
}

export default App;
