import CurrentWork from "./components/CurrentWork";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Aitools from "./components/Aitools";
import StudyTimeline from "./components/StudyTimeline";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      
      {/* Home Section - Hero component */}
      <section id="home">
        <Hero />
      </section>
      
      {/* About Me Section - Expertise component */}
      <section id="about">
        <Expertise />
      </section>
      
      {/* Services Section */}
      <section id="services">
        <Services />
      </section>
      
      {/* Current Work Section - No navbar link, but kept for display */}
      <section id="work">
        <CurrentWork />
      </section>
      
      {/* Portfolio/Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      
      {/* AI Tools Section - No navbar link, but kept for display */}
      <section id="ai-tools">
        <Aitools />
      </section>
      
      {/* Education Timeline Section - No navbar link, but kept for display */}
      <section id="education">
        <StudyTimeline />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;