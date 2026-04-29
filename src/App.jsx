import { ThemeProvider } from "./context/ThemeContext";
import CurrentWork from "./components/CurrentWork";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Aitools from "./components/Aitools";
import StudyTimeline from "./components/StudyTimeline";
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <Expertise />
      </section>
      
      <section id="services">
        <Services />
      </section>
      
      <section id="work">
        <CurrentWork />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="ai-tools">
        <Aitools />
      </section>
      
      <section id="education">
        <StudyTimeline />
      </section>
      
      <section id="contact">
        <Contact />
      </section>

     <Footer/>
    </ThemeProvider>
  );
}

export default App;