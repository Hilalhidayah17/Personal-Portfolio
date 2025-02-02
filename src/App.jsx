import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About-me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
