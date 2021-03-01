import React from "react";
import "./Error.css";
import AlbumCard from '../AlbumCard/AlbumCard';
import cappuaLogo from "../../assets/cappualogo.png";

const Error = () => {
  return (
    <div
      className="error-page"
      // style={{ backgroundImage: `url(${cappuaLogo})` }}
    >
      <div className="error">ERROR...😬</div>
    </div>
  );
};

export default Error;
