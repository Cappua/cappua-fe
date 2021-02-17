import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <img
          className="logo"
          src="https://media.giphy.com/media/FxfVpjpQb1kwKadK9L/giphy.gif"
          //   src={"https://picsum.photos/1000?" + Math.random()}
          alt="logo"
        />
      </Link>
      <div className="navbar-contents">
        <Link to="/halloffame">Hall of Fame</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default NavBar;
