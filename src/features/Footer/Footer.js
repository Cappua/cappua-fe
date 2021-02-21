import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-items">
        <Link to="/about">About</Link>
        <Link to="/legal">Legal</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-items">
        <p className="footer__copyright">© 2021 Cappua.</p>
      </div>
    </section>
  );
}

export default Footer;
