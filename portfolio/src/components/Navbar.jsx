import { useState, useEffect } from "react";


function Navbar() {
   const [menu,setMenu] = useState(false);
   useEffect(()=>{
      document.title = "MY PORTFOLIO";
   },[]) 
   return (

    <nav className="navbar">
  <h2>MY PORTFOLIO</h2>

  <ul className={menu ? "active" : ""}>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <button onClick={() => setMenu(!menu)}>
    {menu ? "Close" : "Menu"}
  </button>
</nav>
  );
}

export default Navbar;