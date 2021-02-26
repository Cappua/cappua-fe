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
import Winners from "./features/Winners/Winners";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { errorLink, client } from "./ApolloClient/apolloClient.js";

function App() {
  return (
    <ApolloProvider client={client}>
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
                <h1 id="featured-title">- Featured Artists -</h1>
                <Trio />
                <Announcement />
              </>
            )}
          />
          <Route exact path="/competitions" render={() => <TrackPage />} />
          <Route exact path="/winners" render={() => <Winners />} />
        </div>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
