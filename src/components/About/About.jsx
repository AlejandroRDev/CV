import React from "react";
import "./About.css";

export const About = ({ hero }) => {
  return (
    <div className="about-container">
      <div className="aboutCard">
        <h2 className="card-title">{hero.name}</h2>
        <p className="card-city">
          🗺️{hero.city} {hero.adress}
        </p>
        <p className="card-birthDate">🗓️{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email} className="card-mail">
            alejandrorueda.developer@gmail.com
          </a>
        </p>
        <p className="card-about">{hero.aboutMe[0].info}</p>
        <p className="card-about">{hero.aboutMe[1].info}</p>
        <p className="card-about">{hero.aboutMe[2].info}</p>
        
        
      </div>
    </div>
  );
};
