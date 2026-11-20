import "./App.css";
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education ';
import Footer from './components/Footer ';
import Hero from './components/Hero';
import Projects from './components/Projects ';
import Skills from './components/Skills ';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
export default App;