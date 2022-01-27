import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Education } from "./components/Education/Education.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { More } from './components/More/More';
import { CV } from "./CV/CV";

const { hero, education, experience, languages, personalHabilities, codeLanguages} = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
     <div className="btn-container">
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
      >
        Experience
      </button>
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

      <More languages={languages}
        personalHabilities={personalHabilities}
        codeLanguages={codeLanguages}
      />
      
      
    </div>
  );
}

export default App;
