import { useState, useEffect } from "react";


function Hero() {
    const [show, setshow] = useState(false);
    useEffect(() => {
        document.title = "Ashwa Portfolio";
    }, [])

    function handleClick() {
        setshow(!show);
    }
    return (
        <section id="home">
            <h1>Hi, I'm Akram</h1>
            <h2>Frontend Developer</h2>
            <p> I'm a passionate developer creating amazing web experiences.</p>
            <button onClick={handleClick}>About Me</button>
            {show && (
                <p>I'm a CSE student with a passion for web development.</p>
            )}
        </section>
    );
}
export default Hero;