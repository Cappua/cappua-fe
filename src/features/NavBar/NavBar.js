import React from "react";
import User from "../User/User";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./NavBar.css";
import cappuaLogo from "../../assets/cappualogo.png";

const NavBar = () => {
  let navRef = useRef();
  let navIconRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    if (open) {
      navRef.current.style.width = "0";
      navIconRef.current.style.color = "black";
      setOpen(false);
    } else {
      navRef.current.style.width = "25%";
      navIconRef.current.style.color = "whitesmoke";
      setOpen(true);
    }
  };

  return (
    <div className="navbar-container">
      <Link id="logo-container" to="/index.html">
        <img className="logo" src={cappuaLogo} alt="logo" />
      </Link>
      <div className="navbar-contents">
        <Link to="/olympus" id="hall-fame">
          Hall of Fame
        </Link>
        <Link to="/competitions" id="competitions">
          Competition
        </Link>
        <User />
      </div>
      <div className="menu-container">
        <i
          className="fas fa-bars"
          id="nav-icon"
          ref={navIconRef}
          onClick={toggleMenu}
        />
        <div className="sidenav" ref={navRef}>
          <div id="sidenav-container">
            <div id="sidenav-contents">
              <Link to="/olympus" className="olympus-sidenav">
                Hall of Fame
              </Link>
              <Link to="/competitions" className="competitions-sidenav">
                Competitions
              </Link>
              <User />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
