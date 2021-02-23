import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar.js";
import Banner from "./features/Banner/Banner.js";
import Body from "./features/Body/Body.js";
import Trio from "./features/Trio/Trio.js";
import Announcement from "./features/Announcement/Announcement.js";
import TrackPage from "./features/TrackPage/TrackPage.js";
import AudioPlayer from "./features//AudioPlayer/AudioPlayer.js";
import Footer from "./features/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
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
      </div>
      <Footer />
    </Router>
  );
}

export default App;
