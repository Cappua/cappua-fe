import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client";
import { errorLink, client } from "./ApolloClient/apolloClient.js";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <ApolloProvider client={client}>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={
        "https://cappua-fe-bucket.s3-us-west-1.amazonaws.com/index.html"
      }>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Auth0Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
