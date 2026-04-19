import CurrentWork from "./components/CurrentWork"
import Expertise from "./components/Expertise"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Aitools from './components/Aitools'
import StudyTimeline from "./components/StudyTimeline"
import Contact from "./components/Contact"
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Expertise/>
      <Services/>
      <CurrentWork/>
      <Projects/>
      <Aitools/>
      <StudyTimeline/>
      <Contact/>
    </>
  )
}

export default App