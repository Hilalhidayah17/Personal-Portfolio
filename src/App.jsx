import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About-me";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import TechGrid from "./components/TechGrid";
import Experience from "./components/Experience";

function App() {
  return (
    <main className="bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 min-h-screen text-white">
      <Navbar />
      <Hero />
      <TechGrid />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
