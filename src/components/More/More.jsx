import React from 'react';
import './More.css';
export const More = ({ languages, personalHabilities, codeLanguages}) => {
  return (
  <div className="more">

      <div className="languagesCard">
      {languages.map((language) => {
          return (
            <div key={JSON.stringify(language)} className="languageContent">
              <h3 className="languages">{language.language}</h3>
              <p className="level">Nivel de escritura{language.wrlevel}</p>
              <p className="level">Nivel de comprensión {language.splevel}</p>
            </div>
          );
        })}
      </div>
      <ul className="habilities">
          <li>{personalHabilities[0]}</li>
          <li>{personalHabilities[1]}</li>
          <li>{personalHabilities[2]}</li>
          <li>{personalHabilities[3]}</li>
          <li>{personalHabilities[4]}</li>
          <li>{personalHabilities[5]}</li>
      </ul>
      <ul className="codeLanguages">
          <li>{codeLanguages[0]}</li>
          <li>{codeLanguages[1]}</li>
          <li>{codeLanguages[2]}</li>
          <li>{codeLanguages[3]}</li>
          <li>{codeLanguages[4]}</li>
          <li>{codeLanguages[5]}</li>
          <li>{codeLanguages[6]}</li>
      </ul>
        

      
  </div>);
};
