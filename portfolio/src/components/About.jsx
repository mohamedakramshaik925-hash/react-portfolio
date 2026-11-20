import { useState, useEffect } from "react";
import "./About.css";

function About() {
    const [show,setshow] = useState(false);
    useEffect(()=>{
     console.log("About component mounted");
    },[])

    function handleClick() {
        setshow(!show);
    }

    return (
        <section id="About">
            <h2>About Me</h2>
            <p>I'm a Computer Science and Engineering student passionate
    about web development, programming, and emerging technologies.
    I enjoy building projects, learning new skills, and exploring
    how technology can solve real-world problems.</p>

            <button onClick={handleClick}>Read More</button>    
        {show && (
            <p>I enjoy building responsive and user-friendly web applications.</p>          
    )}
        </section>
    );
}

export default About;