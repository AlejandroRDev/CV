import React from "react";
import "./Experience.css";

export const Experience = ({ experience }) => {
  return (
    <div className="experience">
      <div className="experienceCard">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="experienceContent">
              <h3 className="name"> 👨‍💼 {item.name}</h3>
              <p>{item.enterprise}</p>
              <p>
                {item.date} {item.dateEnd}
              </p>
              <p>
                {item.where} {item.country}
              </p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
