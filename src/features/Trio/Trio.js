import React from "react";
import "./Trio.css";
import trioData from "../../Utilities/trioData";
import { nanoid } from "nanoid";

function Trio() {
  const trioTabs = trioData.map((tab) => {
    const { id, title, image, description, link } = tab;
    if (link !== "" && title == "") {
      return (
        <section className="tab-container" key={nanoid()} id={id}>
          <a href={link}>
            <img
              className="tab-img"
              src={image}
              key={id}
              id={id}
              alt="project-img"
            />
          </a>
          <div className="tab-details" key={id}>
            {/* <h1 id="tab-title">{title}</h1> */}
            <p id="tab-description">{description}</p>
          </div>
          <div id="tab-btn">
            <button className="tab-btn" href={link}>
              Button
            </button>
          </div>
        </section>
      );
    } else if (title !== "") {
      return (
        <section className="tab-container" key={nanoid()} id={id}>
          <a href={link}>
            <img
              className="tab-img"
              src={image}
              key={id}
              id={id}
              alt="project-img"
            />
          </a>
          <div className="tab-details" key={id}>
            <h1 id="tab-title">{title}</h1>
            <p id="tab-description">{description}</p>
          </div>
        </section>
      );
    } else {
      return (
        <section className="tab-container" key={nanoid()} id={id}>
          <a href={link}>
            <img
              className="tab-img"
              src={image}
              key={id}
              id={id}
              alt="project-img"
            />
          </a>
          <div className="tab-details" key={id}>
            <p id="tab-description">{description}</p>
          </div>
        </section>
      );
    }
  });
  return <section className="trio-container">{trioTabs}</section>;
}

export default Trio;
