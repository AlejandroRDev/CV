import React from "react";
import './Education.css'
   
   
   
   export const Education = ({ education }) => {
      return (
        <div className="education">
      <div className="educationCard">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name} </p>
              <p>{item.date} {item.dateEnd}</p>
              <p>{item.place}</p>
            </div>
          );
        })}
      </div>
    </div>
      );
    };