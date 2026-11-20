import { useState, useEffect } from "react";


function Projects() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Projects section loaded");
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Job Portal</h3>
          <p>A website for job seekers and recruiters.</p>
        </div>

        <div className="project-card">
          <h3>AI Automation</h3>
          <p>A system for automating business workflows.</p>
        </div>

        <div className="project-card">
          <h3>Green Building</h3>
          <p>A calculator for sustainable building scores.</p>
        </div>

      </div>

      <button onClick={() => setShow(!show)}>Project Details</button>

      {show && <p>Built using React, Python, HTML, CSS and databases.</p>}
    </section>
  );
}

export default Projects;