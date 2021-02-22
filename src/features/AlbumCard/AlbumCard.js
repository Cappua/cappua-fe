import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import "./AlbumCard.css";
import albumArtSample from "../../assets/wu_tang.jpg";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.07,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const AlbumCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 250, friction: 40 },
  }));
  return (
    <animated.div
      class="AlbumCard"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        backgroundImage: `url(${albumArtSample})`,
      }}
    />
  );
};

export default AlbumCard;
