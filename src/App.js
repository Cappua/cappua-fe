import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./features/NavBar/NavBar.js";
import Banner from "./features/Banner/Banner.js";
import Body from "./features/Body/Body.js";
import SoundBar from "./features/SoundBar/SoundBar.js";
import Trio from "./features/Trio/Trio.js";
import Login from "./features/Login/Login.js";
import Announcement from "./features/Announcement/Announcement.js";
import TrackCard from './features/TrackCard/TrackCard.js';
import TrackTitle from './features/Tracktitle/TrackTitle.js';
import TrackNav from './features/TrackNav/TrackNav.js';
// import { Counter } from "./features/counter/Counter";
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
              <SoundBar />
              <Trio />
              <Announcement />
            </>
          )}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/trackmatch" render={() => (
        <>  
          <TrackTitle/>
          <TrackCard/>
          <SoundBar/>
          <TrackNav/>
        </>  
          )}
        />
      </div>
    </Router>
  );
}

export default App;
