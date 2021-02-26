import React from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import cappuaLogo from "../../assets/cappualogo.png";
import './Loading.css';

const Loading = () => {
  return (
    <div
      className="loading-screen"
      style={{
        backgroundImage: `url(${cappuaLogo})`,
      }}
    >
      <AlbumCard />
    </div>
  );
};

export default Loading;
