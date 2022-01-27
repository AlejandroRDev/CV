import React from "react";
import "./Hero.css";



 export const Hero = ({ hero }) => {
  return (
    <div className="hero-container">
      <div className="logo-container">
        <a href="https://www.linkedin.com/in/alejandro-rueda-rodriguez-b78054228/">
          <img
            className="logo"
            src="https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png"
            alt="enlace linkedin"
          ></img>
        </a>
        <a href={hero.gitHub}>
          <img
            className="logo"
            src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
            alt="github logo"
          ></img>
        </a>
      </div>
      <div className="welcome-container">
          <div className="welcome-textContainer">
            <h1 className="title">{hero.welcome.info[0]}</h1>
            <p className="text"> {hero.welcome.info[1]}</p>
          </div>
      </div>
    </div>
  );
};

