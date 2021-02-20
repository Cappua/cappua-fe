import React from "react";
import User from "../User/User";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./NavBar.css";
function NavBar() {
  let navRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    if (open) {
      navRef.current.style.width = "0";
      setOpen(false);
    } else {
      navRef.current.style.width = "25%";
      setOpen(true);
    }
  };

  return (
    <div className="navbar-container">
      <Link id="logo-container" to="/">
        <img
          className="logo"
          src="https://media.giphy.com/media/FxfVpjpQb1kwKadK9L/giphy.gif"
          alt="logo"
        />
      </Link>
      <div className="navbar-contents">
        <Link to="/halloffame">Hall of Fame</Link>
        <Link to="/competitions">Competitions</Link>
        <User />
      </div>
      <div className="menu-container">
        <i className="fas fa-bars" id="nav-icon" onClick={toggleMenu} />
        <div className="sidenav" ref={navRef}>
          <div id="sidenav-container">
            <div id="sidenav-contents">
              <Link to="/halloffame">Hall of Fame</Link>
              <Link to="/competitions">Competitions</Link>
              <User />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;