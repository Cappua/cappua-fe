import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import cappuaLogo from '../../assets/cappualogo.png'
import "./NavBar.css";

function NavBar() {
  let navRef = useRef();
  const [open, setOpen] = useState(false);
  const toggleSettings = () => {
    if (open) {
      navRef.current.style.width = "0";
      setOpen(false);
    } else {
      navRef.current.style.width = "20vw";
      setOpen(true);
    }
  };
  return (
    <div className="navbar-container">
      <Link to="/">
        <img
          className="logo"
          src={cappuaLogo}
          alt="logo"
        />
      </Link>
      <div className="navbar-contents">
        <Link to="/halloffame">Hall of Fame</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="menu-container">
        <i class="fas fa-bars" id="nav-icon" onClick={toggleSettings} />
        <div className="sidenav" ref={navRef}>
          <div id="sidenav-container">
            <div id="sidenav-contents">
              <Link to="/halloffame">Hall of Fame</Link>
              <Link to="/competitions">Competitions</Link>
              <Link to="/login" id="login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
