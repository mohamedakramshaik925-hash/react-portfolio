import { useEffect } from "react";


function Footer() {
  useEffect(() => {
    console.log("Footer loaded");
  }, []);

  return (
    <footer>
      <p>© 2026 Ashwa. All rights reserved.</p>

      <a href="https://github.com/Ashwa2007">GitHub</a>

      <a href="https://www.linkedin.com/in/s-ashwa-748522328/">
        LinkedIn
      </a>

      <a href="#home">Back to Top ↑</a>
    </footer>
  );
}

export default Footer;