import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar.js";
import Banner from "./features/Banner/Banner.js";
import Body from "./features/Body/Body.js";
import Trio from "./features/Trio/Trio.js";
import Announcement from "./features/Announcement/Announcement.js";
import Competition from "./features/Competition/Competition.js";
import AudioPlayer from "./features//AudioPlayer/AudioPlayer.js";
import Winners from "./features/Winners/Winners";
import "./App.css";
import { useQuery } from "@apollo/client";
import { CompetitionContext } from "./CompetitionContext";
import UserContext from "./UserContext";
import { GET_VERSES_BY_COMPETITION } from "./GraphQL/queries";
import Error from "./features/Error/Error";
import Loading from "./features/Loading/Loading";
import Olympus from "./features/Olympus/Olympus";

const App = () => {
  const [competition, setCompetition] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const userValue = { userInfo, setUserInfo };
  const { error, loading, data } = useQuery(GET_VERSES_BY_COMPETITION);

  useEffect(() => {
    setCompetition(data);
  }, [data]);

  return (
    <div className="App">
      {error && <Error />}
      {loading && <Loading />}
      {competition && (
        <UserContext.Provider value={userValue}>
          <CompetitionContext.Provider value={competition}>
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
            <Route exact path="/olympus" render={() => <Olympus />} />

            <Route exact path="/competitions" render={() => <Competition />} />
            <Route exact path="/winners" render={() => <Winners />} />
          </CompetitionContext.Provider>
        </UserContext.Provider>
      )}
    </div>
  );
};

export default App;
