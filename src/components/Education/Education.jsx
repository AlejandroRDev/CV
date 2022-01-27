import React from "react";
import './Education.css'
   
   
   
   export const Education = ({ education }) => {
      return (
        <div className="education">
      <div className="educationCard">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="educationContent">
              <h3 className="name">📕 {item.name} </h3>
              <p>{item.date} {item.dateEnd}</p>
              <p>{item.place}</p>
            </div>
          );
        })}
      </div>
    </div>
      );
    };