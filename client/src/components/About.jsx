import React from "react";
import "../estilos/About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="text-container">
        <h2 className="about-title">ABOUT THIS SINGLE PAGE APPLICATION</h2>
        <p className="about-text">
          GameFlix consumes data from{" "}
          <a
          className="rawg-link"
            href="https://rawg.io/"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            RAWG
          </a>{" "}
          API and a local database. It allows you to search by name, filter by
          gender and origin, and sort by alphabetical order and ranking and even
          create your own videogame. By clicking each videogame, you can see
          more information such as its release date and a brief description of
          the selected game.
        </p>
        <br />

        <div>
          <h2 className="tech-title">🚀 Used Technologies: </h2>
          <p className="tech-items">
            JavaScript - React - Redux - HMTL - CSS - NodeJS - Express -
            Sequelize - PostgreSQL
          </p>
        </div>
       

        <div>
          <div className="links-container">
            <h2 className="tech-title">Contact me: </h2>
            <div className="about-item">
              <a href="mailto:laricorvalan94@gmail.com">
                <img
                className="about-img"
                  src="https://api.iconify.design/logos:google-gmail.svg"
                  alt="Gmail Icon"
                />
              </a>
              <p className="link-name">Gmail</p>
            </div>
            <div className="about-item">
              <a href="https://www.linkedin.com/in/lara-corvalan-b7273723b/">
                <img
                className="about-img"
                  src="https://api.iconify.design/logos:linkedin-icon.svg"
                  alt="Linkedin Icon"
                />
              </a>
              <p className="link-name">Linkedin</p>
            </div>
            <div className="about-item">
              <a href="https://github.com/LaraCorvalan">
                <img
                className="about-img"
                  src="https://api.iconify.design/logos:github-icon.svg"
                  alt="Linkedin Icon"
                />
              </a>
              <p className="link-name">Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
