import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-e23-u4dy.us.auth0.com"
    clientId="9yOyW6Kmq0X9uU3a6IvfYOTPzzS6StBX"
    redirectUri="http://localhost:3000/"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
