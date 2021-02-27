import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client";
import { errorLink, client } from "./ApolloClient/apolloClient.js";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain="dev-e23-u4dy.us.auth0.com"
      clientId="9yOyW6Kmq0X9uU3a6IvfYOTPzzS6StBX"
      redirectUri={window.location.origin}
    >
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Auth0Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
