import { useState, useEffect } from "react";


function Skills() {
  const [show, setShow] = useState(false);

  const skills = ["HTML", "CSS", "JavaScript", "React", "Python","Git", "GitHub"];

  useEffect(() => {
    console.log("Skills section loaded");
  }, []);

  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Details" : "Show Details"}
      </button>
    </section>
  );
}

export default Skills;